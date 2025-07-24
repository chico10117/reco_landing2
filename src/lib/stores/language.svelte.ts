import { browser } from '$app/environment';

export type Language = 'es' | 'en' | 'es-MX';

class LanguageStore {
	currentLanguage = $state<Language>('en'); // Default to English
	hasUserSelected = false;

	constructor() {
		// Check if we're in the browser
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('language') as Language;
			if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'es-MX')) {
				this.currentLanguage = savedLang;
				this.hasUserSelected = true;
				// Sync cookie with localStorage
				document.cookie = `user-language=${savedLang}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
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
			// Also set a cookie for server-side detection
			document.cookie = `user-language=${this.currentLanguage}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
		}
	}

	setLanguage(lang: Language) {
		this.currentLanguage = lang;
		this.hasUserSelected = true;
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', this.currentLanguage);
			// Also set a cookie for server-side detection
			document.cookie = `user-language=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
		}
	}
	
	// Create a reactive translation function
	useTranslation() {
		const translations = $derived(this.currentLanguage);
		return translations;
	}
}

export const languageStore = new LanguageStore(); 