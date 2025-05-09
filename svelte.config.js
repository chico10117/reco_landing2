import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			split: false
		}),
		alias: {
			$lib: './src/lib'
		},
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		},
		inlineStyleThreshold: 8192,
		csrf: {
			checkOrigin: false
		}
	},
	preprocess: vitePreprocess()
};

export default config; 