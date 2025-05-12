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
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (path.startsWith('/img/') || path.includes('.jpg') || path.includes('.png') || path.includes('.svg')) {
					console.warn(`Missing asset file: ${path}`);
					return;
				}
				
				// otherwise fail the build
				throw new Error(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
			},
			handleMissingId: 'ignore',
			entries: ['*']
		},
		inlineStyleThreshold: 8192,
		csrf: {
			checkOrigin: false
		}
	},
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true
	}
};

export default config; 