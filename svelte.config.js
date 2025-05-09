import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`Warning: ${message} (${path} from ${referrer})`);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config; 