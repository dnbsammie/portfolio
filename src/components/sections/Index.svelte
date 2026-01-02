<script lang="ts">
	import { createLocalTimeStore } from '$lib';
	import { onDestroy } from 'svelte';
	const time = createLocalTimeStore();
	onDestroy(time.stop);
</script>

<section id="index" class="index" aria-labelledby="index-section">
	<div class="h_title">
		<h1>Samuel Rivera</h1>
	</div>
	<hr />
	<div class="h_bottom">
		<div>
			<small>Bogotá</small>
			<small class="h_time">{$time}</small>
		</div>
		<div>
			<button class="anchor_btn">
				<span class="txt_bx">Get In Touch</span>
			</button>
		</div>
	</div>
</section>

<style>
	#index {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}
	#index {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.h_title {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: var(--space-sm);
		max-width: var(--max-width-xl);
		padding: var(--space-xs);
		text-align: left;
	}

	.h_bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: min(7svh, 70px);
		width: 100%;
		max-width: var(--max-width-xl);
		padding: var(--space-xs);
	}

	.h_bottom > div {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.h_bottom > div:first-child {
		align-items: flex-start;
	}

	.h_bottom > div:last-child {
		align-items: flex-end;
	}

	.h_time {
		text-transform: uppercase;
		font-family: var(--font-code), monospace;
	}

	@media (min-width: 720px) {
		.h_title {
			align-items: flex-end;
			flex-direction: row;
		}
	}
</style>
