import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Specify Node.js 20.x runtime
			runtime: 'nodejs20.x'
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing routes during prerendering
				if (path.startsWith('/blog') || 
					path.startsWith('/about') || 
					path.startsWith('/partners') ||
					path.startsWith('/cookies')) {
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