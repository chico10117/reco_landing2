# Language Selector Bug Report

## Issue Description
The language selector has a critical state synchronization bug where:
1. User selects English language
2. On page reload, the site briefly shows Spanish content
3. Then switches to English content but keeps displaying the Spanish flag (🇪🇸)
4. The flag doesn't update to match the actual selected language (should show 🇺🇸 for English)

## Expected Behavior
- When English is selected and page is reloaded, it should:
  - Show English content immediately without flashing Spanish
  - Display the US flag (🇺🇸) for English
  - Maintain consistent state between server and client

## Technical Details

### Current Architecture
- **Framework**: SvelteKit with Svelte 5 (runes syntax)
- **State Management**: Custom reactive store using `$state` rune
- **Persistence**: localStorage + cookies
- **SSR**: Server-side rendering with hydration

### Files Involved
- `/src/lib/stores/language.svelte.ts` - Language store
- `/src/lib/components/ui/language-selector.svelte` - UI component
- `/src/routes/+layout.svelte` - Layout initialization
- `/src/routes/+layout.server.ts` - Server data loading
- `/src/hooks.server.ts` - Server-side language detection

## Attempted Solutions (Failed)

### Attempt 1: Initialize store with localStorage check
```typescript
// language.svelte.ts
function getInitialLanguage(): Language {
  if (browser && typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'es-MX')) {
      return savedLang;
    }
  }
  return 'es';
}

class LanguageStore {
  currentLanguage = $state<Language>(getInitialLanguage());
  // ...
}
```
**Result**: Failed due to SSR/hydration mismatch. Server always returns 'es', client returns saved language.

### Attempt 2: Cookie-based server detection
```typescript
// hooks.server.ts
const languageCookie = event.cookies.get('user-language') as Language | undefined;
if (languageCookie && (languageCookie === 'es' || languageCookie === 'en' || languageCookie === 'es-MX')) {
  event.locals.suggestedLanguage = languageCookie;
}
```
**Result**: Server correctly reads cookie, but client-side store still initializes incorrectly.

### Attempt 3: Unified initialization method
```typescript
// language.svelte.ts
initializeFromServer(serverLanguage: Language | undefined) {
  if (this.initialized) return;
  
  if (browser) {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      this.currentLanguage = savedLang;
      this.hasUserSelected = true;
    } else if (serverLanguage) {
      this.currentLanguage = serverLanguage;
    }
  } else if (serverLanguage) {
    this.currentLanguage = serverLanguage;
  }
  
  this.initialized = true;
}
```
**Result**: Still shows flash of wrong language and flag desynchronization.

### Attempt 4: Force re-render with key blocks
```svelte
<!-- language-selector.svelte -->
{#key currentLang}
<div class="flex items-center gap-1.5">
  <img src={currentLanguage.svgFlag} alt="" />
  <span>{currentLang.toUpperCase()}</span>
</div>
{/key}
```
**Result**: No improvement, flag still shows incorrect state.

### Attempt 5: Derived reactivity improvements
```typescript
// language-selector.svelte
const currentLang = $derived(languageStore.currentLanguage);
const currentLanguageData = $derived(getLanguageData(currentLang));
```
**Result**: More reactive but still has the same synchronization issue.

## Root Cause Analysis

The issue appears to be a complex interaction between:

1. **SSR/Hydration Mismatch**: Server renders with one language, client hydrates with another
2. **State Initialization Timing**: The store initializes before or after critical lifecycle events
3. **Svelte 5 Runes Reactivity**: Possible issue with how `$state` and `$derived` handle SSR
4. **Multiple Truth Sources**: localStorage, cookies, and store state can be out of sync

## Symptoms Timeline

1. **Initial Load**: Server renders with default/cookie language
2. **Hydration Start**: Client-side JavaScript takes over
3. **Store Re-initialization**: Store checks localStorage and updates
4. **Partial Update**: Language content updates but flag component doesn't re-render correctly
5. **Stale Flag**: Flag image remains from initial render

## Environment
- Node.js: 20.x
- SvelteKit: Latest
- Svelte: 5.x (with runes)
- Deployment: Vercel

## Additional Notes

- The bug is consistent and reproducible
- It affects user experience significantly
- The flag shown is specifically the Spanish flag when English is selected
- Sometimes briefly shows UK flag (🇬🇧) before settling on Spanish flag
- The language content itself (text) updates correctly, only the flag is wrong

## Next Steps

Consider:
1. Using SvelteKit's built-in `load` functions for language initialization
2. Implementing a loading state until language is definitively set
3. Using Svelte's `onMount` for client-only initialization
4. Investigating if this is a known issue with Svelte 5 runes and SSR
5. Potentially using a different state management approach (stores without runes)