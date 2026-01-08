<script lang="ts">
	// ── System ──
	// import Loader from '../components/system/Loader.svelte';
	// ── Layout ──
	import Background from '../components/layout/Background.svelte';
	import MenuBar from '../components/layout/MenuBar.svelte';
	// import MenuOverlay from '../components/layout/MenuOverlay.svelte';
	import Footer from '../components/layout/Footer.svelte';
	// ── Sections ──
	import Index from '../components/sections/Index.svelte';
	import Work from '../components/sections/Work.svelte';
	import Core from '../components/sections/Core.svelte';
	import Stack from '../components/sections/Stack.svelte';
	import Insights from '../components/sections/Insights.svelte';
	// ── Div's ──
</script>

<!-- Head -->
<svelte:head>
	<title>S. Rivera | Portfolio</title>
</svelte:head>
<!-- Content Row -->
<!-- <Loader /> -->
<MenuBar />
<!-- Main -->
<main>
	<Background />
	<Index />
	<Work />
	<Core />
	<Stack />
	<Insights />
	<Footer />
</main>
