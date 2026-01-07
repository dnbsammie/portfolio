<script lang="ts">
</script>

<div class="loader">
	<div class="name">
		<span>S</span>
		<span>A</span>
		<span>M</span>
		<span>U</span>
		<span>E</span>
		<span>L</span>
	</div>
	<progress id="loading_bar" max="100" value="50"></progress>
</div>

<style>
	.loader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		padding: var(--space-sm);
		position: fixed;
		background: var(--gray-950);
		width: 100%;
		height: 100%;
		z-index: 9999;
	}

	.name {
		width: 100%;
		max-width: var(--max-width-sm);
		display: flex;
		justify-content: space-between;
	}

	.name span {
		font-size: var(--font-size-h1);
		text-transform: uppercase;
	}

	progress {
		width: 100%;
		max-width: var(--max-width-sm);
		height: 5px;
		border-radius: 5px;
		background-color: var(--gray-900);
		transition: width 300ms ease;
	}
	progress[value]::-webkit-progress-bar {
		width: 100%;
		height: 5px;
		border-radius: 5px;
		background-color: var(--gray-900);
		transition: width 300ms ease;
	}
	progress[value]::-webkit-progress-value {
		width: 0;
		border-radius: 5px;
		background-color: var(--gray-50);
		transition: width 300ms ease;
	}
</style>
