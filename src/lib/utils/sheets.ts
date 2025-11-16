/**
 * Google Sheets Integration Utility
 *
 * Exports booking data to Google Sheets for business analysis and tracking
 * Uses Google Sheets API v4 with service account authentication
 */

import { google } from 'googleapis'
import type { Booking } from '@prisma/client'
import { format } from 'date-fns'
import { formatPrice } from './pricing'

/**
 * Initialize Google Sheets API client with service account credentials
 */
function getGoogleSheetsClient() {
  const credentials = {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  }

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error('Google Sheets credentials not configured')
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  return google.sheets({ version: 'v4', auth })
}

/**
 * Export a booking to Google Sheets
 *
 * @param booking - Booking object to export
 * @returns Success boolean
 */
export async function exportBookingToSheets(booking: Booking): Promise<boolean> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

  if (!spreadsheetId) {
    console.warn('Google Sheets integration not configured - skipping export')
    return false
  }

  try {
    const sheets = getGoogleSheetsClient()

    // Prepare row data
    const rowData = [
      format(new Date(booking.createdAt), 'yyyy-MM-dd HH:mm:ss'), // Timestamp
      booking.id, // Booking ID
      booking.name, // Customer Name
      booking.email, // Email
      booking.phone, // Phone
      booking.address, // Address
      booking.postcode, // Postcode
      booking.serviceType, // Service Type
      booking.propertyType, // Property Type
      booking.propertySize || '', // Property Size
      booking.numberOfRooms?.toString() || '', // Number of Rooms
      booking.squareMeters?.toString() || '', // Square Meters
      booking.stainRemoval ? 'Yes' : 'No', // Stain Removal
      format(new Date(booking.preferredDate), 'yyyy-MM-dd'), // Preferred Date
      booking.distance.toFixed(1), // Distance (miles)
      formatPrice(booking.serviceCost), // Service Cost
      formatPrice(booking.travelCost), // Travel Cost
      formatPrice(booking.totalCost), // Total Cost
      booking.status, // Status
      booking.additionalNotes || '', // Notes
      booking.adminNotes || '', // Admin Notes
      booking.completedAt ? format(new Date(booking.completedAt), 'yyyy-MM-dd') : '' // Completion Date
    ]

    // Append row to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Bookings!A:V', // Columns A through V (22 columns)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData]
      }
    })

    console.log(`Successfully exported booking ${booking.id} to Google Sheets`)
    return true
  } catch (error) {
    console.error('Failed to export booking to Google Sheets:', error)
    // Don't throw - this is a non-critical operation
    return false
  }
}

/**
 * Initialize the Google Sheet with headers (run once during setup)
 *
 * @param spreadsheetId - Google Spreadsheet ID
 */
export async function initializeSheetHeaders(spreadsheetId?: string): Promise<void> {
  const sheetId = spreadsheetId || process.env.GOOGLE_SPREADSHEET_ID

  if (!sheetId) {
    throw new Error('Spreadsheet ID not provided')
  }

  try {
    const sheets = getGoogleSheetsClient()

    const headers = [
      'Timestamp',
      'Booking ID',
      'Customer Name',
      'Email',
      'Phone',
      'Address',
      'Postcode',
      'Service Type',
      'Property Type',
      'Property Size',
      'Number of Rooms',
      'Square Meters',
      'Stain Removal',
      'Preferred Date',
      'Distance (miles)',
      'Service Cost',
      'Travel Cost',
      'Total Cost',
      'Status',
      'Customer Notes',
      'Admin Notes',
      'Completion Date'
    ]

    // Create or update headers in row 1
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Bookings!A1:V1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [headers]
      }
    })

    // Format header row (bold, frozen)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0, // First sheet
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: 22
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.09, green: 0.56, blue: 1 }, // Blue
                  textFormat: {
                    foregroundColor: { red: 1, green: 1, blue: 1 }, // White
                    fontSize: 11,
                    bold: true
                  },
                  horizontalAlignment: 'CENTER'
                }
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
            }
          },
          {
            updateSheetProperties: {
              properties: {
                sheetId: 0,
                gridProperties: {
                  frozenRowCount: 1 // Freeze header row
                }
              },
              fields: 'gridProperties.frozenRowCount'
            }
          }
        ]
      }
    })

    console.log('Successfully initialized Google Sheets headers')
  } catch (error) {
    console.error('Failed to initialize Google Sheets headers:', error)
    throw error
  }
}

/**
 * Update booking status in Google Sheets
 *
 * @param bookingId - Booking ID to update
 * @param newStatus - New status value
 * @param completedAt - Completion date (if completed)
 */
export async function updateBookingStatusInSheets(
  bookingId: string,
  newStatus: string,
  completedAt?: Date
): Promise<boolean> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

  if (!spreadsheetId) {
    console.warn('Google Sheets integration not configured')
    return false
  }

  try {
    const sheets = getGoogleSheetsClient()

    // Find the row with this booking ID
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Bookings!B:B' // Column B contains Booking IDs
    })

    const rows = response.data.values || []
    const rowIndex = rows.findIndex(row => row[0] === bookingId)

    if (rowIndex === -1) {
      console.warn(`Booking ${bookingId} not found in Google Sheets`)
      return false
    }

    // Update status (column S, index 18)
    const actualRowNumber = rowIndex + 1 // Sheets are 1-indexed

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Bookings!S${actualRowNumber}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[newStatus]]
      }
    })

    // If completed, update completion date (column V, index 21)
    if (completedAt) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Bookings!V${actualRowNumber}`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[format(completedAt, 'yyyy-MM-dd')]]
        }
      })
    }

    console.log(`Updated booking ${bookingId} status to ${newStatus} in Google Sheets`)
    return true
  } catch (error) {
    console.error('Failed to update booking status in Google Sheets:', error)
    return false
  }
}

/**
 * Batch export multiple bookings to Google Sheets
 *
 * @param bookings - Array of bookings to export
 */
export async function batchExportBookings(bookings: Booking[]): Promise<number> {
  let successCount = 0

  for (const booking of bookings) {
    const success = await exportBookingToSheets(booking)
    if (success) successCount++
  }

  return successCount
}

/**
 * Get spreadsheet URL for admin dashboard link
 */
export function getSpreadsheetUrl(): string | null {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

  if (!spreadsheetId) {
    return null
  }

  return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`
}
