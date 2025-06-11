import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 5173,
		fs: {
			allow: ['.']
		},
		allowedHosts: [
			'localhost',
			'127.0.0.1',
			'cb2e-88-12-161-201.ngrok-free.app',
			'.ngrok-free.app',
			'.ngrok.io'
		]
	},
	build: {
		target: 'esnext'
	}
}); 