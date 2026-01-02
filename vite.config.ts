import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit(), devtoolsJson()],
    base: process.env.BASE_PATH ? '/' + process.env.BASE_PATH + '/' : '/'
});
