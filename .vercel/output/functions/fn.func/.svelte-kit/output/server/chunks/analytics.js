import Cookies from "js-cookie";
import "clsx";
import "./client.js";
const CONSENT_COOKIE_NAME = "reco_cookie_consent";
const CONSENT_VERSION = "1.0";
const DEFAULT_PREFERENCES = {
  essential: true,
  analytics: false,
  marketing: false
};
function getConsentStatus() {
  const consentCookie = Cookies.get(CONSENT_COOKIE_NAME);
  if (!consentCookie) {
    return null;
  }
  try {
    return JSON.parse(consentCookie);
  } catch {
    Cookies.remove(CONSENT_COOKIE_NAME);
    return null;
  }
}
function setConsentPreferences(preferences) {
  const consentStatus = {
    hasConsent: true,
    preferences: {
      ...preferences,
      essential: true
      // Essential cookies always enabled
    },
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    version: CONSENT_VERSION
  };
  Cookies.set(CONSENT_COOKIE_NAME, JSON.stringify(consentStatus), {
    expires: 365,
    secure: true,
    sameSite: "lax"
  });
}
function hasConsentFor(cookieType) {
  const consent = getConsentStatus();
  if (!consent) {
    return cookieType === "essential";
  }
  return consent.preferences[cookieType];
}
function clearConsent() {
  Cookies.remove(CONSENT_COOKIE_NAME);
}
const COOKIE_DESCRIPTIONS = {
  essential: {
    name: "Cookies Esenciales",
    description: "Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.",
    examples: "Preferencias de idioma, sesión de usuario, configuración del sitio"
  },
  analytics: {
    name: "Cookies de Análisis",
    description: "Nos ayudan a entender cómo los visitantes interactúan con el sitio web.",
    examples: "Google Analytics, Hotjar, Vercel Analytics, métricas de rendimiento"
  },
  marketing: {
    name: "Cookies de Marketing",
    description: "Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.",
    examples: "Google Ads, Facebook Pixel, seguimiento de conversiones"
  }
};
let vercelAnalyticsInitialized = false;
const isVercelAnalyticsInitialized = () => {
  return vercelAnalyticsInitialized;
};
const vercelTrack = (event, data) => {
  if (hasConsentFor("analytics") && isVercelAnalyticsInitialized()) ;
};
const track = (event, data) => {
  if (typeof window !== "undefined" && hasConsentFor("analytics")) {
    if (window.gtag) {
      window.gtag("event", event, data);
    }
    if (window.hj) {
      window.hj("event", event, data);
    }
    vercelTrack();
  }
};
export {
  COOKIE_DESCRIPTIONS as C,
  DEFAULT_PREFERENCES as D,
  clearConsent as c,
  setConsentPreferences as s,
  track as t
};
