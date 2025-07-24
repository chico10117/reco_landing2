import type { Handle } from '@sveltejs/kit';
import type { Language } from '$lib/stores/language.svelte';

// Map of country codes to languages
const countryToLanguage: Record<string, Language> = {
  // Native English-speaking countries - MUST see English
  'US': 'en', // United States
  'GB': 'en', // United Kingdom (England, Scotland, Wales, N. Ireland)
  'CA': 'en', // Canada
  'AU': 'en', // Australia
  'NZ': 'en', // New Zealand
  'IE': 'en', // Ireland
  'ZA': 'en', // South Africa
  'SG': 'en', // Singapore
  'IN': 'en', // India
  'PH': 'en', // Philippines
  'NG': 'en', // Nigeria
  'KE': 'en', // Kenya
  'GH': 'en', // Ghana
  'ZM': 'en', // Zambia
  'ZW': 'en', // Zimbabwe
  'MW': 'en', // Malawi
  'UG': 'en', // Uganda
  'TZ': 'en', // Tanzania
  'BW': 'en', // Botswana
  'JM': 'en', // Jamaica
  'TT': 'en', // Trinidad and Tobago
  'BB': 'en', // Barbados
  'BS': 'en', // Bahamas
  'BZ': 'en', // Belize
  'GY': 'en', // Guyana
  'MT': 'en', // Malta
  
  // Spain - ONLY Spain gets Spain Spanish
  'ES': 'es', // Spain
  
  // Mexico - MUST see Mexican Spanish
  'MX': 'es-MX', // Mexico
  
  // Latin American countries - MUST see Mexican Spanish (es-MX)
  'AR': 'es-MX', // Argentina
  'CO': 'es-MX', // Colombia
  'CL': 'es-MX', // Chile
  'PE': 'es-MX', // Peru
  'VE': 'es-MX', // Venezuela
  'EC': 'es-MX', // Ecuador
  'GT': 'es-MX', // Guatemala
  'CU': 'es-MX', // Cuba
  'BO': 'es-MX', // Bolivia
  'DO': 'es-MX', // Dominican Republic
  'HN': 'es-MX', // Honduras
  'PY': 'es-MX', // Paraguay
  'SV': 'es-MX', // El Salvador
  'NI': 'es-MX', // Nicaragua
  'CR': 'es-MX', // Costa Rica
  'PA': 'es-MX', // Panama
  'UY': 'es-MX', // Uruguay
  'PR': 'es-MX', // Puerto Rico
  'GQ': 'es-MX', // Equatorial Guinea (Spanish-speaking in Africa)
};

function getLanguageFromCountry(country: string | null): Language {
  if (!country) return 'en'; // Default to English for unknown locations
  
  const countryUpper = country.toUpperCase();
  
  // If country is explicitly mapped, use that mapping
  if (countryUpper in countryToLanguage) {
    return countryToLanguage[countryUpper];
  }
  
  // For unmapped countries, default to English (rest of the world)
  return 'en';
}

export const handle: Handle = async ({ event, resolve }) => {
  // Check if user already has a language preference (from cookie)
  const languageCookie = event.cookies.get('user-language');
  
  if (!languageCookie) {
    // Collect all available geolocation data
    let detectedCountry: string | null = null;
    let detectedCity: string | null = null;
    let detectedRegion: string | null = null;
    let detectedPostalCode: string | null = null;
    
    // Get all Vercel geolocation headers (available immediately)
    const vercelCountry = event.request.headers.get('x-vercel-ip-country');
    const vercelCity = event.request.headers.get('x-vercel-ip-city');
    const vercelRegion = event.request.headers.get('x-vercel-ip-country-region');
    const vercelPostalCode = event.request.headers.get('x-vercel-ip-postal-code');
    
    if (vercelCountry) {
      detectedCountry = vercelCountry;
      detectedCity = vercelCity;
      detectedRegion = vercelRegion;
      detectedPostalCode = vercelPostalCode;
    }
    
    // Fallback: Check Vercel's geo object
    // @ts-ignore - Vercel adds this to the request
    if (!detectedCountry && event.platform?.context?.geo) {
      // @ts-ignore
      detectedCountry = event.platform.context.geo.country;
      // @ts-ignore
      detectedCity = event.platform.context.geo.city;
      // @ts-ignore
      detectedRegion = event.platform.context.geo.region;
    }
    
    // Additional fallback: Cloudflare headers
    if (!detectedCountry) {
      const cfCountry = event.request.headers.get('cf-ipcountry');
      if (cfCountry) {
        detectedCountry = cfCountry;
      }
    }
    
    // Final fallback: Check Accept-Language header for hints
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
    
    // Store all geolocation data in event.locals
    event.locals.suggestedLanguage = suggestedLanguage;
    event.locals.detectedCountry = detectedCountry;
    event.locals.detectedCity = detectedCity;
    event.locals.detectedRegion = detectedRegion;
    event.locals.detectedPostalCode = detectedPostalCode;
    
    // Debug logging (can be removed in production)
    console.log('=== Geolocation Data ===');
    console.log('Country:', detectedCountry);
    console.log('City:', detectedCity);
    console.log('Region:', detectedRegion);
    console.log('Postal Code:', detectedPostalCode);
    console.log('Suggested Language:', suggestedLanguage);
    console.log('========================');
  }
  
  const response = await resolve(event);
  return response;
};