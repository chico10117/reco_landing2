/**
 * Test function to verify language mapping is working correctly
 * This can be removed after testing or kept for debugging
 */

import type { Language } from '$lib/stores/language.svelte';

// Copy of the mapping logic for testing
const countryToLanguage: Record<string, Language> = {
  // Native English-speaking countries - MUST see English
  'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
  'ZA': 'en', 'SG': 'en', 'IN': 'en', 'PH': 'en', 'NG': 'en', 'KE': 'en',
  'GH': 'en', 'ZM': 'en', 'ZW': 'en', 'MW': 'en', 'UG': 'en', 'TZ': 'en',
  'BW': 'en', 'JM': 'en', 'TT': 'en', 'BB': 'en', 'BS': 'en', 'BZ': 'en',
  'GY': 'en', 'MT': 'en',
  
  // Spain - ONLY Spain gets Spain Spanish
  'ES': 'es',
  
  // Mexico - MUST see Mexican Spanish
  'MX': 'es-MX',
  
  // Latin American countries - MUST see Mexican Spanish (es-MX)
  'AR': 'es-MX', 'CO': 'es-MX', 'CL': 'es-MX', 'PE': 'es-MX', 'VE': 'es-MX',
  'EC': 'es-MX', 'GT': 'es-MX', 'CU': 'es-MX', 'BO': 'es-MX', 'DO': 'es-MX',
  'HN': 'es-MX', 'PY': 'es-MX', 'SV': 'es-MX', 'NI': 'es-MX', 'CR': 'es-MX',
  'PA': 'es-MX', 'UY': 'es-MX', 'PR': 'es-MX', 'GQ': 'es-MX',
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

/**
 * Test the language mapping with various countries
 */
export function testLanguageMapping(): void {
  console.log('🧪 Testing Language Mapping...\n');
  
  // Test cases
  const testCases = [
    // English-speaking countries
    { country: 'US', expected: 'en', description: 'United States → English' },
    { country: 'GB', expected: 'en', description: 'United Kingdom → English' },
    { country: 'CA', expected: 'en', description: 'Canada → English' },
    { country: 'AU', expected: 'en', description: 'Australia → English' },
    { country: 'IN', expected: 'en', description: 'India → English' },
    { country: 'NG', expected: 'en', description: 'Nigeria → English' },
    
    // Spain
    { country: 'ES', expected: 'es', description: 'Spain → Spanish (ES)' },
    
    // Mexico
    { country: 'MX', expected: 'es-MX', description: 'Mexico → Mexican Spanish' },
    
    // Latin America
    { country: 'AR', expected: 'es-MX', description: 'Argentina → Mexican Spanish' },
    { country: 'CO', expected: 'es-MX', description: 'Colombia → Mexican Spanish' },
    { country: 'CL', expected: 'es-MX', description: 'Chile → Mexican Spanish' },
    { country: 'PE', expected: 'es-MX', description: 'Peru → Mexican Spanish' },
    { country: 'BR', expected: 'en', description: 'Brazil (unmapped) → English' },
    
    // Rest of world (unmapped countries)
    { country: 'FR', expected: 'en', description: 'France (unmapped) → English' },
    { country: 'DE', expected: 'en', description: 'Germany (unmapped) → English' },
    { country: 'IT', expected: 'en', description: 'Italy (unmapped) → English' },
    { country: 'JP', expected: 'en', description: 'Japan (unmapped) → English' },
    { country: 'CN', expected: 'en', description: 'China (unmapped) → English' },
    { country: 'RU', expected: 'en', description: 'Russia (unmapped) → English' },
    
    // Null/undefined
    { country: null, expected: 'en', description: 'Unknown location → English' },
  ];
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach(({ country, expected, description }) => {
    const result = getLanguageFromCountry(country);
    const success = result === expected;
    
    console.log(
      `${success ? '✅' : '❌'} ${description}`,
      success ? '' : `(got: ${result}, expected: ${expected})`
    );
    
    if (success) passed++;
    else failed++;
  });
  
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed! Language mapping is correct.');
  } else {
    console.log('⚠️ Some tests failed. Please check the mapping.');
  }
}

// Export for use in browser console or components
export { getLanguageFromCountry };