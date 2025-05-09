import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// Allow serving files from one level up from the package root
			allow: ['..']
		}
	},
	build: {
		cssCodeSplit: false,
		cssMinify: true,
		rollupOptions: {
			output: {
				manualChunks: undefined,
				assetFileNames: 'assets/[name].[hash][extname]',
				chunkFileNames: 'assets/[name].[hash].js',
				entryFileNames: 'assets/[name].[hash].js'
			}
		}
	},
	optimizeDeps: {
		include: ['@sveltejs/kit']
	}
}); 