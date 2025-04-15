import { GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_PRIVATE_KEY, GOOGLE_SHEETS_SPREADSHEET_ID } from '$env/static/private';
import { google } from 'googleapis';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    console.log('Received form data:', data); // Debug log to see what data we're getting

    const { name, email, whatsapp, newsletter } = data;
    
    // Log individual fields
    console.log('Extracted fields:', {
      name,
      email,
      whatsapp,
      newsletter
    });

    // Prepare the row data
    const row = [
      new Date().toISOString(), // Timestamp
      name || '',  // Make sure we're using the correct field names
      email || '',
      whatsapp || '',
      newsletter ? 'Yes' : 'No'
    ];

    console.log('Row to be inserted:', row); // Debug log to see what we're sending

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Form Responses!A:E',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row]
      }
    });

    return json({ success: true });
  } catch (error: unknown) {
    // Type guard to check if error is an Error object
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error in form submission:', errorMessage);
    
    return json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    );
  }
};

function validateWhatsApp(value: string) {
  // Clear previous error
  whatsappError = '';
  
  // Remove any spaces or non-digit characters
  const cleanedValue = value.trim().replace(/\D/g, '');
  
  // Validate Uruguayan phone number (starts with 9, total 8 digits)
  if (cleanedValue && (cleanedValue.length !== 8 || !cleanedValue.startsWith('9'))) {
    whatsappError = 'Ingresa un número válido de Uruguay (debe comenzar con 9 y tener 8 dígitos)';
    return false;
  }
  return true;
} 