import Cookies from 'js-cookie';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentStatus {
  hasConsent: boolean;
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

const CONSENT_COOKIE_NAME = 'reco_cookie_consent';
const CONSENT_VERSION = '1.0';

// Default preferences (essential always true)
export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

/**
 * Get current consent status from cookies
 */
export function getConsentStatus(): ConsentStatus | null {
  const consentCookie = Cookies.get(CONSENT_COOKIE_NAME);
  
  if (!consentCookie) {
    return null;
  }

  try {
    return JSON.parse(consentCookie);
  } catch {
    // If cookie is malformed, remove it
    Cookies.remove(CONSENT_COOKIE_NAME);
    return null;
  }
}

/**
 * Set consent preferences
 */
export function setConsentPreferences(preferences: CookiePreferences): void {
  const consentStatus: ConsentStatus = {
    hasConsent: true,
    preferences: {
      ...preferences,
      essential: true, // Essential cookies always enabled
    },
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  // Set cookie to expire in 1 year
  Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentStatus), {
    expires: 365,
    secure: true,
    sameSite: 'lax',
  });
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  setConsentPreferences({
    essential: true,
    analytics: true,
    marketing: true,
  });
}

/**
 * Accept only essential cookies
 */
export function acceptEssentialOnly(): void {
  setConsentPreferences({
    essential: true,
    analytics: false,
    marketing: false,
  });
}

/**
 * Check if user has given consent for specific cookie type
 */
export function hasConsentFor(cookieType: keyof CookiePreferences): boolean {
  const consent = getConsentStatus();
  
  if (!consent) {
    return cookieType === 'essential'; // Essential cookies don't require consent
  }

  return consent.preferences[cookieType];
}

/**
 * Check if user has made any consent choice
 */
export function hasUserConsented(): boolean {
  return getConsentStatus() !== null;
}

/**
 * Clear all consent cookies (for testing or consent withdrawal)
 */
export function clearConsent(): void {
  Cookies.remove(CONSENT_COOKIE_NAME);
}

/**
 * Get user-friendly cookie descriptions
 */
export const COOKIE_DESCRIPTIONS = {
  essential: {
    name: 'Cookies Esenciales',
    description: 'Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.',
    examples: 'Preferencias de idioma, sesión de usuario, configuración del sitio',
  },
  analytics: {
    name: 'Cookies de Análisis',
    description: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web.',
    examples: 'Google Analytics, Hotjar, métricas de rendimiento',
  },
  marketing: {
    name: 'Cookies de Marketing',
    description: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.',
    examples: 'Google Ads, Facebook Pixel, seguimiento de conversiones',
  },
} as const;