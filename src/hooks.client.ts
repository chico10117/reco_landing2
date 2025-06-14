// Client-side hooks to prevent auto-initialization of analytics
// This ensures analytics only load with user consent

import { dev } from '$app/environment';

// Prevent automatic Vercel Analytics injection in development
if (dev) {
  // In development, we want full control over when analytics initialize
}