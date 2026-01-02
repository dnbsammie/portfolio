<script lang="ts">
	import { base } from '$app/paths';

	export let error: App.Error;
	export let status: number;

	const message = error?.message?.trim() || 'This page does not exist';
</script>

<svelte:head>
	<title>404 | {message}</title>
	<meta name="robots" content="noindex, nofollow" />
	<meta property="og:title" content={`${status} - ${message}`} />
</svelte:head>

<main>
	<section class="notfound" id="notfound">
		<h1 id="title">{status ?? '404'}</h1>
		<p id="description">{message}</p>
		<a href="{base}/" data-sveltekit-preload class="back_home">Go Home</a>
	</section>
</main>

<style>
	#notfound {
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		background: transparent;
	}
</style>
