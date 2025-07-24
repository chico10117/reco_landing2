/**
 * Geolocation utilities for accessing user location data
 */

export interface GeolocationData {
  country?: string | null;
  city?: string | null;
  region?: string | null;
  postalCode?: string | null;
  suggestedLanguage?: string;
}

/**
 * Get user's location information from server-side detection
 * Available immediately on first page load
 */
export const getGeolocationData = (pageData: any): GeolocationData => {
  return {
    country: pageData?.detectedCountry || null,
    city: pageData?.detectedCity || null,
    region: pageData?.detectedRegion || null,
    postalCode: pageData?.detectedPostalCode || null,
    suggestedLanguage: pageData?.suggestedLanguage || null,
  };
};

/**
 * Format location string for display
 * Examples: "Madrid, Spain" or "New York, NY, US" or "Mexico City, Mexico"
 */
export const formatLocation = (geo: GeolocationData): string => {
  const parts: string[] = [];
  
  if (geo.city) parts.push(geo.city);
  if (geo.region && geo.country !== 'MX') parts.push(geo.region); // Skip region for Mexico to avoid clutter
  if (geo.country) {
    // Convert country codes to readable names
    const countryNames: Record<string, string> = {
      'US': 'United States',
      'MX': 'Mexico',
      'ES': 'Spain',
      'GB': 'United Kingdom',
      'CA': 'Canada',
      'FR': 'France',
      'DE': 'Germany',
      'IT': 'Italy',
      'BR': 'Brazil',
      'AR': 'Argentina',
      'CO': 'Colombia',
      'CL': 'Chile',
      'PE': 'Peru',
    };
    parts.push(countryNames[geo.country] || geo.country);
  }
  
  return parts.join(', ') || 'Unknown location';
};

/**
 * Check if user is from a specific country
 */
export const isFromCountry = (geo: GeolocationData, countryCode: string): boolean => {
  return geo.country?.toLowerCase() === countryCode.toLowerCase();
};

/**
 * Check if user is from Latin America
 */
export const isFromLatinAmerica = (geo: GeolocationData): boolean => {
  const latinAmericaCountries = [
    'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 
    'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR'
  ];
  return geo.country ? latinAmericaCountries.includes(geo.country.toUpperCase()) : false;
};

/**
 * Get timezone estimate based on country/region
 * Useful for showing local time or scheduling
 */
export const getEstimatedTimezone = (geo: GeolocationData): string => {
  const timezoneMap: Record<string, string> = {
    'US': 'America/New_York', // Default to Eastern, could be more specific with region
    'MX': 'America/Mexico_City',
    'ES': 'Europe/Madrid',
    'GB': 'Europe/London',
    'CA': 'America/Toronto',
    'FR': 'Europe/Paris',
    'DE': 'Europe/Berlin',
    'AR': 'America/Buenos_Aires',
    'CO': 'America/Bogota',
    'CL': 'America/Santiago',
    'PE': 'America/Lima',
  };
  
  return geo.country ? timezoneMap[geo.country] || 'UTC' : 'UTC';
};