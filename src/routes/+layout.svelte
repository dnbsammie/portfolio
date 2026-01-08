<script lang="ts">
	// ─── Lib ───
	import { favicon } from '$lib';
	// ── Styles ───
	import '../styles/animations.css';
	import '../styles/global.css';
	import '../styles/mixins.css';
	import '../styles/variables.css';
	// ─── Page ───

	let { children } = $props();
</script>

<svelte:head>
	<!-- SEO -->
	<meta name="description" content="Developer portfolio, projects, blog & experiments." />
	<meta
		name="keywords"
		content="portfolio, vite, svelte, typescript, threejs, three, gsap, animations, github, developer, software"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta charset="UTF-8" />
	<!-- Open Graph -->
	<meta property="og:title" content="Samuel Rivera | Portfolio" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="Developer portfolio, projects, blog & experiments." />
	<meta property="og:image" content="/og-default.png" />
	<!-- Title -->
	<title>S. Rivera | Portfolio</title>
	<!-- Icons -->
	<link rel="icon" href={favicon} />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
		integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

{@render children()}
