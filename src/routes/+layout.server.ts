import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		suggestedLanguage: locals.suggestedLanguage,
		detectedCountry: locals.detectedCountry
	};
};