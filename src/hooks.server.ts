import type { Handle } from '@sveltejs/kit';
import type { Language } from '$lib/stores/language.svelte';

// Map of country codes to languages
const countryToLanguage: Record<string, Language> = {
  // English-speaking countries
  'US': 'en', // United States
  'CA': 'en', // Canada
  'GB': 'en', // United Kingdom
  'AU': 'en', // Australia
  'NZ': 'en', // New Zealand
  'IE': 'en', // Ireland
  
  // Mexican Spanish
  'MX': 'es-MX', // Mexico
  
  // Spanish-speaking countries (default Spanish)
  'ES': 'es', // Spain
  'AR': 'es', // Argentina
  'CO': 'es', // Colombia
  'CL': 'es', // Chile
  'PE': 'es', // Peru
  'VE': 'es', // Venezuela
  'EC': 'es', // Ecuador
  'GT': 'es', // Guatemala
  'CU': 'es', // Cuba
  'BO': 'es', // Bolivia
  'DO': 'es', // Dominican Republic
  'HN': 'es', // Honduras
  'PY': 'es', // Paraguay
  'SV': 'es', // El Salvador
  'NI': 'es', // Nicaragua
  'CR': 'es', // Costa Rica
  'PA': 'es', // Panama
  'UY': 'es', // Uruguay
  'PR': 'es', // Puerto Rico
};

function getLanguageFromCountry(country: string | null): Language {
  if (!country) return 'es'; // Default to Spanish
  return countryToLanguage[country.toUpperCase()] || 'es';
}

export const handle: Handle = async ({ event, resolve }) => {
  // Check if user already has a language preference (from cookie)
  const languageCookie = event.cookies.get('user-language');
  
  if (!languageCookie) {
    // Try to detect country from various sources
    let detectedCountry: string | null = null;
    
    // 1. Check Vercel's geo object (if deployed on Vercel)
    // @ts-ignore - Vercel adds this to the request
    if (event.platform?.context?.geo) {
      // @ts-ignore
      detectedCountry = event.platform.context.geo.country;
    }
    
    // 2. Check Cloudflare's CF-IPCountry header
    if (!detectedCountry) {
      detectedCountry = event.request.headers.get('cf-ipcountry');
    }
    
    // 3. Check X-Vercel-IP-Country header (Vercel Edge)
    if (!detectedCountry) {
      detectedCountry = event.request.headers.get('x-vercel-ip-country');
    }
    
    // 4. As a fallback, check Accept-Language header for hints
    if (!detectedCountry) {
      const acceptLanguage = event.request.headers.get('accept-language');
      if (acceptLanguage) {
        // Simple parsing - look for country codes
        if (acceptLanguage.includes('en-US')) detectedCountry = 'US';
        else if (acceptLanguage.includes('es-MX')) detectedCountry = 'MX';
        else if (acceptLanguage.includes('es-ES')) detectedCountry = 'ES';
        else if (acceptLanguage.includes('en-GB')) detectedCountry = 'GB';
      }
    }
    
    // Get suggested language based on country
    const suggestedLanguage = getLanguageFromCountry(detectedCountry);
    
    // Store the suggestion in event.locals for the layout to access
    event.locals.suggestedLanguage = suggestedLanguage;
    event.locals.detectedCountry = detectedCountry;
  }
  
  const response = await resolve(event);
  return response;
};