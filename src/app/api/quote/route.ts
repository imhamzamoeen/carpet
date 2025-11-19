import { NextRequest, NextResponse } from 'next/server';
import { submitLeadToGoogleSheets } from '@/lib/google-sheets/leads';
import { z } from 'zod';

const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+44|0)[0-9]{10}$/, 'Invalid UK phone number'),
  postcode: z.string().regex(/^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i, 'Invalid UK postcode'),
  serviceType: z.enum(['carpet', 'upholstery', 'rug', 'mattress', 'multiple']),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data using safeParse for type safety
    const validationResult = quoteFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, errors: validationResult.error.issues },
        { status: 400 }
      );
    }

    // Submit to Google Sheets
    const result = await submitLeadToGoogleSheets({
      ...validationResult.data,
      timestamp: new Date().toISOString(),
    });

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Quote request submitted successfully' });
    } else {
      throw new Error('Failed to submit quote');
    }
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
