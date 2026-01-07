<script lang="ts">
	import { createLocalTimeStore, scrollIntoView, t } from '$lib';
	import { onDestroy } from 'svelte';
	import SmartLink from '../ui/SmartLink.svelte';
	import LangSwitcher from '../system/LangSwitcher.svelte';

	const time = createLocalTimeStore();
	onDestroy(time.stop);
</script>

<section id="index" class="index" aria-labelledby="index-section">
	<div class="hero_top">
		<div class="hero_title">
			<h6>{$t('home.role')}</h6>
			<h1>Samuel Rivera</h1>
		</div>
	</div>
	<hr />
	<div class="hero_container">
		<div class="hero_info">
			<h6>{$t('home.profile')}</h6>
			<p>{$t('home.intro')}</p>
			<div class="hero_cta">
				<SmartLink
					href="mailto:seriveramosq@gmail.com"
					label={$t('nav.emailLabel')}
					icon="fa-solid fa-chevron-right"
					ariaLabel="email"
				/>
				<SmartLink
					href="#work"
					label={$t('home.scroll')}
					icon="fa-solid fa-chevron-right"
					ariaLabel="scroll-down"
				/>
			</div>
		</div>
		<div class="hero_skills">
			<small>{$t('home.skills.1')}</small>
			<small>{$t('home.skills.2')}</small>
			<small>{$t('home.skills.3')}</small>
			<small>{$t('home.skills.4')}</small>
		</div>
		<div class="hero_data">
			<small>{$t('home.availability')}</small>
			<small>Bogotá</small>
			<small class="h_time">{$time}</small>
			<small>{$t('nav.language')}</small>
			<LangSwitcher />
		</div>
	</div>
</section>

<style>
	#index {
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		gap: var(--space-xs);
		padding: 0 var(--space-xs) var(--space-sm);
	}

	.hero_container,
	.hero_top {
		width: 100%;
		max-width: var(--max-width-xxl);
	}

	.hero_top {
		height: fit-content;
	}

	.hero_container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: var(--space-sm);
		grid-row-gap: var(--space-sm);
	}

	.hero_container > div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		min-height: 125px;
		height: 100%;
		width: 100%;
		gap: var(--space-xxs);
	}

	.hero_info {
		grid-area: 1 / 1 / 2 / 3;
	}

	.hero_cta {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: var(--space-sm);
	}
	.hero_skills {
		grid-area: 2 / 1 / 3 / 2;
	}
	.hero_data {
		grid-area: 2 / 2 / 3 / 3;
	}

	@media (min-width: 768px) {
		#index {
			gap: var(--space-md);
		}

		.hero_container {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr;
			grid-column-gap: var(--space-md);
		}

		.hero_container > div {
			justify-content: space-between;
		}

		.hero_info {
			grid-area: 1 / 1 / 2 / 3;
		}

		.hero_skills {
			grid-area: 1 / 3 / 2 / 4;
		}

		.hero_data {
			grid-area: 1 / 4 / 2 / 5;
		}
	}

	@media (min-width: 1080px) {
		.hero_container,
		.hero_top {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: 1fr;
		}

		.hero_title {
			grid-area: 1 / 2 / 2 / 6;
		}

		.hero_info {
			grid-area: 1 / 2 / 2 / 4;
		}

		.hero_skills {
			grid-area: 1 / 4 / 2 / 5;
		}

		.hero_data {
			grid-area: 1 / 5 / 2 / 6;
		}
	}

	@media (min-width: 1440px) {
		.hero_container,
		.hero_top {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
		}

		.hero_title {
			grid-area: 1 / 2 / 2 / 7;
		}

		.hero_info {
			grid-area: 1 / 2 / 2 / 4;
		}

		.hero_skills {
			grid-area: 1 / 4 / 2 / 5;
		}

		.hero_data {
			grid-area: 1 / 5 / 2 / 6;
		}
	}
</style>
