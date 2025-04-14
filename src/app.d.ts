/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {}
  interface Platform {}
  interface Session {}
  interface Stuff {}
}

declare module '$env/static/private' {
  export const GOOGLE_SHEETS_CLIENT_EMAIL: string;
  export const GOOGLE_SHEETS_PRIVATE_KEY: string;
  export const GOOGLE_SHEETS_SPREADSHEET_ID: string;
} 