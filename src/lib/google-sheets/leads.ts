import { google } from 'googleapis';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  serviceType: string;
  message?: string;
  timestamp: string;
}

export async function submitLeadToGoogleSheets(leadData: LeadData) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${process.env.GOOGLE_SHEETS_LEADS_SHEET_NAME}!A:G`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            leadData.timestamp,
            leadData.name,
            leadData.email,
            leadData.phone,
            leadData.postcode,
            leadData.serviceType,
            leadData.message || '',
          ],
        ],
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error submitting lead to Google Sheets:', error);
    return { success: false, error };
  }
}
