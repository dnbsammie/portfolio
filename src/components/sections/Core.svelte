<link rel="stylesheet" href="../../styles/variables.css">
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

<section class="core" id="core">
	<div class="container">
		<aside class="sticky_sidebar">
			<h6 class="sticky_text">{$t('core.title')}</h6>
		</aside>
		<div class="statement">
			<h2 class="text">{$t('core.statement.1')}</h2>
			<h2 class="text">{$t('core.statement.2')}</h2>
			<h2 class="text">{$t('core.statement.3')}</h2>
			<h2 class="text">{$t('core.statement.4')}</h2>
		</div>
	</div>
</section>

<style>
	#core {
		display: flex;
		flex-direction: row;
		height: 120svh;
		padding: var(--space-xxl) var(--space-xs);
		gap: var(--space-xs);
		background: var(--gray-950);
		background: -webkit-linear-gradient(
			0deg,
			var(--gray-950) 0%,
			var(--gray-950) 90%,
			rgba(255, 255, 255, 0) 100%
		);
		background: -moz-linear-gradient(
			0deg,
			var(--gray-950) 0%,
			var(--gray-950) 90%,
			rgba(255, 255, 255, 0) 100%
		);
		background: linear-gradient(
			0deg,
			var(--gray-950) 0%,
			var(--gray-950) 90%,
			rgba(255, 255, 255, 0) 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#050505", endColorstr="#FFFFFF00", GradientType=0);
	}

	.statement{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-xs);
	}

	.text {
		margin: 0;
		width: 100%;
		line-height: 1.2;
		color: hsl(from var(--gray-700) h s l / 0.2);
		background: linear-gradient(to right, var(--gray-100), var(--gray-100)) no-repeat;
		-webkit-background-clip: text;
		background-clip: text;
		background-size: 0;
		text-transform: capitalize;
		transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
		position: relative;
	}
</style>
