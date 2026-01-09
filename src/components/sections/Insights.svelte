<script lang="ts">
	import { t, img1, img2, img3, img4, img5 } from '$lib';
	import SmartButton from '../ui/SmartButton.svelte';
	import gsap from 'gsap';
	import { CustomEase } from 'gsap/CustomEase';

	let isTwoColumns = false;

	function toggleDirection() {
		isTwoColumns = !isTwoColumns;
	}
</script>

<section id="insights" class="insights" aria-labelledby="insights-section">
	<div class="i_top">
		<h2>{$t('insights.title')}</h2>
		<SmartButton
				label={$t('insights.toggleView')}
				ariaLabel={$t('insights.toggleView')}
				icon="fa-solid fa-arrows-rotate"
				on:click={toggleDirection}
				tone="light"
		/>
	</div>
	<div
			class="i_grid"
			class:twoCols={isTwoColumns}
	>
		{#each [img1, img2, img3, img4, img5] as img, i}
			<div class="post" class:row={isTwoColumns}>
				<div class="post_img" class:row={isTwoColumns}>
					<img src={img} alt=""/>
				</div>
				<div class="post_text" class:row={isTwoColumns}>
					<h5>{$t(`insights.post.${i + 1}`)}</h5>
					<div class="post_row">
						<small>{$t(`post.date0${i + 1}`)}</small>
						<a
								href="https://www.linkedin.com/posts/"
								class="fa-solid fa-chevron-right"
								target="_blank"
								aria-label="post anchor"
						></a>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="i_footer">
		<h2>{$t('insights.bottom')}</h2>
	</div>
</section>

<style>
	#insights {
		height: 128svh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-xs);
		color: var(--gray-200);
		padding: var(--space-md) var(--space-xs);
		background: transparent;
	}

	#insights h2, #insights h5 {
		color: var(--gray-50);
	}
	/* Components */
	.i_top,
	.i_grid,
	.i_footer {
		max-width: var(--max-width-xl);
		width: 100%;
	}
	.i_top,
	.i_footer {
		display: flex;
		align-items: center;
		height: 12svh;
	}

	.i_top {
		gap: var(--space-xs);
		justify-content: space-between;
	}

	.i_grid {
		width: 100%;
		height: 90svh;
		display: grid;
		gap: var(--space-xs);
	}
	.i_grid:not(.twoCols) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 1fr);
	}

	.i_grid.twoCols {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
	.i_footer {
		margin-top: auto;
		justify-content: center;
		text-align: center;
	}
	/* Sub Components*/
	.post {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-xs);
		padding-bottom: var(--space-xs);
		border-bottom: 2px solid hsl(from var(--gray-50) h s l / 0.5);
		transition: all 0.35s cubic-bezier(0.87, 0, 0.13, 1);
		will-change: transform;
	}

	.post:not(.row) {
		flex-direction: row;
		height: calc(15svh - var(--space-xs));
	}

	.post.row {
		flex-direction: column;
		height: calc(30svh - var(--space-xs));
	}

	.post_img{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		min-height: 0;
	}

	.post_img:not(.row) {
		flex: 1;
	}

	.post_img.row {
		flex: 2;
	}

	.post_img img {
		display: block;
		border-radius: 5px;
	}

	.post_text {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-xs);
	}

	.post_text:not(.row) {
		flex: 2;
	}

	.post_text.row {
		flex: 1;
	}

	.post_row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
