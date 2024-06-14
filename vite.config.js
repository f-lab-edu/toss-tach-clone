import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
	root: 'src',
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		rollupOptions: {
			input: path.resolve(__dirname, 'src/index.html'),
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
