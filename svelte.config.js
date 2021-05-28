/** @type {import('@sveltejs/kit').Config} */
import adapterNetlify from '@sveltejs/adapter-netlify';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapterNetlify(),
	}
};

export default config;
