<script lang="ts">
	// ── System ──
	// ── Layout ──
	import Background from '../components/layout/Background.svelte';
	import MenuBar from '../components/layout/MenuBar.svelte';
	// import MenuOverlay from '../components/layout/MenuOverlay.svelte';
	import Footer from '../components/layout/Footer.svelte';
	// ── Sections ──
	import Index from '../components/sections/Index.svelte';
	import Work from '../components/sections/Work.svelte';
	// import Core from '../components/sections/Core.svelte';
	// import Stack from '../components/sections/Stack.svelte';
	// import Insights from '../components/sections/Insights.svelte';
	// ── Div's ──
</script>

<svelte:head>
	<title>S. Rivera | Portfolio</title>
</svelte:head>
<MenuBar />
<!-- Main -->
<main>
	<Background />
	<Index />
	<Work />
	<Footer />
</main>
