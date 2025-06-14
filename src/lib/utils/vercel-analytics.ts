/**
 * Consent-aware Vercel Analytics wrapper
 */

import { track as _vercelTrack } from '@vercel/analytics/sveltekit';
import { hasConsentFor } from './cookies';
import { isVercelAnalyticsInitialized } from '$lib/analytics';

/**
 * Track event in Vercel Analytics only if user has consented and analytics is initialized
 * @param event The event name
 * @param data Optional event data
 */
export const vercelTrack = (
  event: string, 
  data?: Record<string, string | number | boolean | null>
): void => {
  if (hasConsentFor('analytics') && isVercelAnalyticsInitialized()) {
    _vercelTrack(event, data);
  }
};

/**
 * Check if Vercel Analytics tracking is available
 */
export const isVercelTrackingEnabled = (): boolean => {
  return hasConsentFor('analytics') && isVercelAnalyticsInitialized();
};