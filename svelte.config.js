import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing routes during prerendering
				if (path.startsWith('/blog') || 
					path.startsWith('/about') || 
					path.startsWith('/partners')) {
					console.warn(`Ignoring "${message}" for path "${path}" (referred from "${referrer}")`);
					return;
				}
				// Otherwise throw the error
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config; 