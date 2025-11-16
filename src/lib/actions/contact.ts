'use server'

import { prisma } from '@/lib/db'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate input
    const validatedData = contactFormSchema.parse(data)

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
        isRead: false,
      },
    })

    // TODO: Send email notification to admin
    // This would integrate with your email service (SendGrid, Resend, etc.)

    return {
      success: true,
      message: 'Your message has been sent successfully!',
      data: { id: contactMessage.id },
    }
  } catch (error) {
    console.error('Error submitting contact form:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation error',
        errors: error.issues,
      }
    }

    return {
      success: false,
      message: 'Failed to submit contact form. Please try again later.',
    }
  }
}
