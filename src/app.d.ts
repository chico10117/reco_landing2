/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {}
  interface Platform {}
  interface Session {}
  interface Stuff {}
}

// Environment variable declarations can be added here as needed
// No Google Sheets API variables required for the new landing page 

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}; 