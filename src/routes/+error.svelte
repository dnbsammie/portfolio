<script lang="ts">
	import { base } from '$app/paths';
	import { t } from '$lib';
	import SmartLink from '../components/ui/SmartLink.svelte';
	import Background from '../components/layout/Background.svelte';
	import Footer from '../components/layout/Footer.svelte';
	export let error: App.Error;
	export let status: number;

	const message = error?.message?.trim() || $t('notfound.default');
</script>

<svelte:head>
	<title>404 | {message}</title>
	<meta name="robots" content="noindex, nofollow" />
	<meta property="og:title" content={`${status} - ${message}`} />
</svelte:head>

<main>
	<Background />
	<section class="notfound" id="notfound">
		<div class="error_title">
			<h1 id="outline_text">{status ?? '404'}</h1>
		</div>
		<div class="error_bottom">
			<div class="error_l">
				<h4>{$t('notFound.title')}</h4>
				<p id="description">{$t('notFound.description')}</p>
			</div>
			<div class="error_r">
				<SmartLink
					href="{base}/"
					label={$t('notFound.return')}
					ariaLabel={$t('notFound.return')}
					icon="fa-solid fa-chevron-right"
					tone="light"
				/>
			</div>
		</div>
	</section>
	<Footer />
</main>

<style>
	#notfound {
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		background: transparent;
		color: var(--gray-200);
	}

	.error_title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.error_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: var(--space-md);
		z-index: 1;
	}

	.error_bottom h4 {
		width: 13ch;
		color: var(--gray-50);
	}

	.error_bottom p {
		max-width: 30ch;
	}

	.error_l,
	.error_r {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
	}

	.error_r {
		align-items: flex-end;
	}
</style>
