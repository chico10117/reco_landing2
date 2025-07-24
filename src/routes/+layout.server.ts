import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		suggestedLanguage: locals.suggestedLanguage,
		detectedCountry: locals.detectedCountry,
		detectedCity: locals.detectedCity,
		detectedRegion: locals.detectedRegion,
		detectedPostalCode: locals.detectedPostalCode
	};
};