# Reco Landing Page - Svelte 5 Migration

This project is a Svelte 5 migration of the Reco landing page. Several updates have been made to ensure compatibility with Svelte 5's new runes mode.

## Requirements

- Node.js v20.x (as specified in package.json and .nvmrc)
- pnpm package manager (preferred over npm)

## Setup and Running

1. Make sure you're using Node.js v20.x
   ```bash
   node -v
   ```

2. If you have nvm installed, you can easily switch to the correct Node version:
   ```bash
   nvm use
   ```

3. Install dependencies with pnpm
   ```bash
   pnpm install
   ```

4. Run the development server
   ```bash
   pnpm dev
   ```

5. Alternative: Use the wrapper script that handles Node version checking automatically:
   ```bash
   ./run-dev.sh
   ```

## Why pnpm?

We use pnpm as our package manager for several important reasons:

1. **Disk Space Efficiency**: pnpm uses a content-addressable store for packages, significantly reducing disk usage by storing each version of a dependency only once.

2. **Performance**: pnpm is faster than npm for installation and updates, especially on large projects.

3. **Strict Node Modules**: pnpm creates a symlinked node_modules structure that prevents packages from accessing dependencies they don't explicitly declare, making your project more reliable.

4. **Workspaces Support**: pnpm has excellent built-in support for monorepos through its workspaces feature.

5. **Compatibility**: pnpm maintains compatibility with the npm ecosystem while offering these improvements.

## Svelte 5 Migration Changes

The following updates were made to ensure compatibility with Svelte 5:

1. **Button Component**: Updated to use Svelte 5's `$props` and `{@render}` syntax instead of `$$restProps` and `<slot>`.

2. **Event Handling**: Updated all occurrences of deprecated `on:click` to the new `onclick` attribute.

3. **Reactive State**: Properly marked variables with `$state()` where they needed to be reactive.

4. **Layout Template**: Updated to use `{@render $$slots.default?.()}` instead of `<slot>`.

5. **Package Configuration**: Updated to use proper Svelte 5 compatible versions:
   - Using `svelte@^5.0.0-next.57` 
   - Updated `@sveltejs/vite-plugin-svelte` to `^4.0.0-next.6`

6. **Slot Conflict Resolution**: Fixed the slot conflict error by ensuring consistent slot usage across the app and updating component dependencies.

## Common Svelte 5 Changes

When migrating to Svelte 5, remember these common changes:

1. Replace `<slot>` with `{@render $$slots.default?.()}`
2. Replace `on:event` with `onevent`
3. Replace reactive variables with `$state()`
4. Replace computed values with `$derived`
5. Replace `$$restProps` with proper prop handling
6. Make sure the Svelte compiler options have `runes: true`

## Troubleshooting

If you encounter slot conflicts with error messages like "Cannot use `<slot>` syntax and `{@render ...}` tags in the same component", check:

1. Ensure all components are consistently using `{@render $$slots.default?.()}` and not a mix of old and new syntax
2. Update all dependency versions for Svelte 5 compatibility
3. Check for syntax conflicts between the imported components
4. In some cases, deleting node_modules and reinstalling dependencies can help

## Project Structure

This is a standard SvelteKit project with the following structure:

```
reco_landing2
  ├── src/              # Source code
  │   ├── lib/          # Libraries
  │   │   ├── components/  # Components
  │   │   ├── utils/       # Utilities
  │   │   └── ...
  │   ├── routes/       # SvelteKit routes
  │   └── app.html      # App template
  ├── static/           # Static assets
  ├── .nvmrc            # Node version specification
  ├── run-dev.sh        # Development runner script
  └── ...               # Other config files
``` 