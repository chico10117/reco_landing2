/// <reference types="@sveltejs/kit" />
import type { Language } from '$lib/stores/language.svelte';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			suggestedLanguage?: Language;
			detectedCountry?: string | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}; 