import { browser } from '$app/environment';

export type Language = 'es' | 'en';

class LanguageStore {
	currentLanguage = $state<Language>('es');

	constructor() {
		// Check if we're in the browser
		if (typeof window !== 'undefined') {
			const savedLang = localStorage.getItem('language') as Language;
			if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
				this.currentLanguage = savedLang;
			}
		}
	}

	toggleLanguage() {
		this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
		if (typeof window !== 'undefined') {
			localStorage.setItem('language', this.currentLanguage);
		}
	}

	setLanguage(lang: Language) {
		this.currentLanguage = lang;
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