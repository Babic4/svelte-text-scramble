import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: './src/index.ts',
			name: 'TextScramble',
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: ['svelte', 'motion'],
		},
	},
	plugins: [svelte()],
})
