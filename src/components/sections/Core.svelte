<script lang="ts">
	import { t } from '$lib';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const textElements = gsap.utils.toArray('.text');

		textElements.forEach((text) => {
			gsap.to(text as Element, {
				backgroundSize: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: text as Element,
					start: 'center 70%',
					end: 'center 10%',
					scrub: true
				}
			});
		});
	});
</script>

<link rel="stylesheet" href="../../styles/variables.css" />

<section class="core" id="core">
	<h2 class="text">{$t('core.statement.1')}</h2>
	<h2 class="text">{$t('core.statement.2')}</h2>
	<h2 class="text">{$t('core.statement.3')}</h2>
	<h2 class="text">{$t('core.statement.4')}</h2>
</section>

<style>
	#core {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 130svh;
		padding: var(--space-md) var(--space-xs);
		gap: var(--space-xs);
		background: var(--gray-50);
	}

	.text {
		margin: 0;
		width: 100%;
		max-width: var(--max-width-xl);
		line-height: 1.2;
		color: hsl(from var(--gray-800) h s l / 0.2);
		background: linear-gradient(to right, var(--gray-900), var(--gray-900)) no-repeat;
		-webkit-background-clip: text;
		background-clip: text;
		background-size: 0;
		text-transform: capitalize;
		transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
		position: relative;
	}
</style>
