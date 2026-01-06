<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { createBackground } from '$lib/three/background';

	let container: HTMLDivElement;
	let destroy: () => void;

	onMount(() => {
		destroy = createBackground(container);
	});

	onDestroy(() => {
		destroy?.();
	});
</script>

<div bind:this={container} class="backgroundCanvas" aria-hidden="true"></div>
