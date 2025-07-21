import { browser } from '$app/environment';

export type Language = 'es' | 'en' | 'es-MX';

class LanguageStore {
	currentLanguage = $state<Language>('es');
	hasUserSelected = false;

	constructor() {
		// Check if we're in the browser
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('language') as Language;
			if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'es-MX')) {
				this.currentLanguage = savedLang;
				this.hasUserSelected = true;
			}
		}
	}

	// Initialize with server suggestion if user hasn't selected
	initializeWithSuggestion(suggestedLanguage?: Language) {
		if (!this.hasUserSelected && suggestedLanguage && typeof window !== 'undefined') {
			// Only use suggestion if user hasn't made a selection
			const savedLang = localStorage.getItem('language');
			if (!savedLang) {
				this.currentLanguage = suggestedLanguage;
				// Don't save to localStorage yet - let user confirm by selecting
			}
		}
	}

	toggleLanguage() {
		// Cycle through languages: es -> en -> es-MX -> es
		if (this.currentLanguage === 'es') {
			this.currentLanguage = 'en';
		} else if (this.currentLanguage === 'en') {
			this.currentLanguage = 'es-MX';
		} else {
			this.currentLanguage = 'es';
		}
		this.hasUserSelected = true;
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', this.currentLanguage);
		}
	}

	setLanguage(lang: Language) {
		this.currentLanguage = lang;
		this.hasUserSelected = true;
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', this.currentLanguage);
		}
	}
	
	// Create a reactive translation function
	useTranslation() {
		const translations = $derived(this.currentLanguage);
		return translations;
	}
}

export const languageStore = new LanguageStore(); 