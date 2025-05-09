import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x',
			edge: false,
			split: false
		}),
		prerender: {
			entries: [
				'*',
				'/restaurantes',
				'/precios',
				'/noticias',
				'/nosotros'
			],
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing routes during prerendering
				if (path.startsWith('/blog') || 
					path.startsWith('/about') || 
					path.startsWith('/partners') ||
					path.startsWith('/cookies') ||
					path.startsWith('/restaurantes') ||
					path.startsWith('/precios') ||
					path.startsWith('/noticias') ||
					path.startsWith('/nosotros')) {
					console.warn(`Ignoring "${message}" for path "${path}" (referred from "${referrer}")`);
					return;
				}
				// Otherwise throw the error
				throw new Error(message);
			}
		},
		paths: {
			base: ''
		}
	},
	preprocess: vitePreprocess()
};

export default config; 