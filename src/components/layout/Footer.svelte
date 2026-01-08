<script lang="ts">
	import { scrollIntoView, currentYear, t } from '$lib';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import SmartLink from '../ui/SmartLink.svelte';
	import LangSwitcher from '../system/LangSwitcher.svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Lenis from 'lenis';

	gsap.registerPlugin(ScrollTrigger);

	let footerContainer: HTMLElement;
	let footer: HTMLElement;
	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		const trigger = ScrollTrigger.create({
			trigger: footer,
			start: 'top bottom',
			end: 'bottom bottom',
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress;
				const yValue = -35 * (1 - progress);

				gsap.set(footerContainer, {
					y: `${yValue}%`
				});
			}
		});

		return () => {
			trigger.kill();
			lenis.destroy();
		};
	});
</script>

<footer class="contact" id="contact" aria-labelledby="footer" bind:this={footer}>
	<div class="f_container" bind:this={footerContainer}>
		<canvas class="f_canvas"></canvas>
		<div class="f_content">
			<div class="f_head">
				<h3>{$t('footer.title')}</h3>
			</div>
			<div class="f_info">
				<div class="f_col" id="paragraph">
					<p>{$t('footer.paragraph')}</p>
					<SmartLink
						href="mailto:seriveramosq@gmail.com"
						label={$t('nav.emailLabel')}
						icon="fa-solid fa-chevron-right"
						ariaLabel="email"
					/>
				</div>
				<div class="f_col" id="media">
					<div class="f_sub_col" id="social">
						<h6>{$t('nav.follow')}</h6>
						<a href="https://codepen.io/dnbsammie" target="_blank">Codepen</a>
						<a href="https://colorswall.com/users/3710" target="_blank">ColorsWall</a>
						<a href="https://github.com/dnbsammie" target="_blank">Github</a>
						<a href="https://www.linkedin.com/in/seriveramosq/" target="_blank">LinkedIn </a>
					</div>
					<div class="f_sub_col" id="sitemap">
						<h6>{$t('nav.sitemap')}</h6>
						<a href="#index" on:click|preventDefault={scrollIntoView}>{$t('nav.home')}</a>
						<a href="#work" on:click|preventDefault={scrollIntoView}>{$t('nav.work')}</a>
						<a href="#core" on:click|preventDefault={scrollIntoView}>{$t('nav.core')}</a>
						<a href="#stack" on:click|preventDefault={scrollIntoView}>{$t('nav.stack')}</a>
						<a href="#insights" on:click|preventDefault={scrollIntoView}>{$t('nav.insights')}</a>
					</div>
				</div>
			</div>
			<div class="f_bottom">
				<small class="copyright" aria-label="copyright"
					>&copy; {currentYear} Samuel Rivera. {$t('footer.copyright')}</small
				>
				<LangSwitcher />
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		bottom: 0;
		width: 100%;
		height: 75svh;
		background-color: var(--gray-950);
		color: var(--gray-300);
		overflow: hidden;
	}
	/* ── Containers ── */
	.f_container {
		position: relative;
		max-width: var(--max-width-xxl);
		width: 100%;
		height: 100%;
		padding: var(--space-lg) var(--space-xs) var(--space-xs);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transform: translateY(-35%);
		will-change: transform;
	}

	.f_canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 0.5;
		z-index: -1;
	}

	.f_content {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: var(--space-xs);
		z-index: 1;
	}

	.f_content h3,
	h6 {
		color: var(--gray-50);
	}
	/* ── Inner Div's ── */
	.f_content > div {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: var(--space-xs);
	}
	/* ── Top ── */
	.f_head {
		flex-direction: column;
	}

	.f_head h3 {
		text-transform: uppercase;
		max-width: 25ch;
	}
	/* ── Mid ── */
	.f_info {
		flex-direction: column;
	}

	.f_col,
	.f_sub_col {
		flex: 1;
		display: flex;
		gap: var(--space-xxs);
	}

	#paragraph {
		gap: var(--space-md);
		margin-bottom: var(--space-md);
	}

	#paragraph p {
		width: 100%;
		max-width: 65ch;
	}

	#media {
		display: flex;
	}

	.f_sub_col,
	#paragraph {
		flex-direction: column;
	}

	/* ── Bot ── */
	.f_bottom {
		flex-direction: row;
		margin-top: auto;
		border-top: 1px solid var(--gray-50);
		align-items: flex-end;
		height: 2rem;
	}

	@media (min-width: 768px) {
		.f_container {
			padding: var(--space-lg) var(--space-sm) var(--space-sm);
		}

		.f_info {
			flex-direction: row;
		}

		#paragraph {
			flex: 2;
			margin-bottom: none;
		}

		#paragraph p {
			width: 75%;
		}
	}
</style>
