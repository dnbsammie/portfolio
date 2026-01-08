<script lang="ts">
	import { t } from '$lib';
	import { onMount } from 'svelte';
	let sectionRef: HTMLElement;
	let scrollRef: HTMLDivElement;
	import { img1, img2, img3, img4, img5 } from '$lib';

	function handleScroll() {
		if (!sectionRef || !scrollRef) return;

		const offsetTop = sectionRef.offsetTop;
		const scrollY = window.scrollY;
		const percentage = Math.min(
			Math.max(((scrollY - offsetTop) / window.innerHeight) * 100, 0),
			400
		);
		scrollRef.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="work" id="work" aria-labelledby="work-section" bind:this={sectionRef}>
	<div class="sticky">
		<div class="projects" bind:this={scrollRef}>
			{#each [img1, img2, img3, img4, img5] as img, i}
				<div class="project">
					<div class="pr_img">
						<img src={img} alt="" />
					</div>
					<div class="pr_title">
						<h4>Project {i + 1}</h4>
						<small>Code</small>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#work {
		height: 500vh;
		padding: 0;
		background: transparent;
	}
	/* ── Containers ── */
	.sticky {
		position: sticky;
		inset: 0;
		height: 100vh;
		overflow: hidden;
		background: transparent;
		z-index: 2;
	}

	.projects {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 500vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		will-change: transform;
		transition: transform 0.3s ease-out;
		z-index: 2;
	}
	/* ── Components ── */
	.project {
		position: relative;
		width: 70vw;
		height: 70vh;
		background: hsl(from var(--gray-400) h s l / 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	.pr_img {
		flex: 2;
		overflow: hidden;
	}
	.pr_title {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-sm);
		color: var(--gray-50);
	}

	.pr_title small {
		font-family: var(--font-code), monospace;
		color: var(--gray-200);
	}

	@media (min-width: 768px) {
		.project {
			width: 50vw;
			height: 75vh;
		}
	}

	@media (min-width: 1200px) {
		.project {
			width: 45vw;
			height: 75vh;
		}
	}
</style>
