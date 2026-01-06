<script lang="ts">
	export let href: string;
	export let label: string | null = null;
	export let icon: string | null = null;
	export let ariaLabel: string | null = null;
	export let newTab: boolean = false;
	$: if (!label && !ariaLabel) {
		console.warn('SmartLink.svelte: ariaLabel is required when label is not present.');
	}

	function handleClick(event: MouseEvent) {
		if (href.startsWith('#')) {
			event.preventDefault();
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<a
	class="smart_link"
	{href}
	aria-label={ariaLabel || label || null}
	target={newTab ? '_blank' : null}
	on:click={handleClick}
>
	{#if label}
		<span class="txt_bx">{label}</span>
	{/if}

	{#if icon}
		<span class="icn_bx"><i class={icon} aria-hidden="true"></i></span>
	{/if}
</a>

<style>
	.smart_link {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
		width: fit-content;
		border: none;
		background: transparent;
		transition: all 0.3s ease-in-out;
		margin-right: var(--space-xxs);
	}

	.txt_bx,
	.icn_bx {
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid 1px var(--gray-50);
		border-radius: 9999px;
		height: fit-content;
		height: 2.25rem;
		color: var(--gray-50);
		background-color: transparent;
		font-size: var(--font-size-small);
		font-family: var(--font-primary), sans-serif;
		font-style: normal;
		transition: all 0.3s ease-in-out;
	}

	.txt_bx {
		font-weight: 400;
		min-width: 8rem;
		padding: var(--space-xxs) var(--space-xs);
	}

	.icn_bx {
		font-weight: 100;
		aspect-ratio: 1/1;
		height: 2.25rem;
		width: 2.25rem;
		margin-left: var(--space-xxs);
	}

	.smart_link:active {
		cursor: pointer;
	}
	.smart_link:active .icn_bx,
	.smart_link:active .txt_bx {
		border: solid 1px var(--ember-500);
		background-color: var(--ember-500);
	}

	.smart_link:active .icn_bx {
		transform: translateX(5px);
	}

	@media (hover: hover) and (pointer: fine) {
		.smart_link:hover {
			cursor: pointer;
		}

		.smart_link:hover .icn_bx,
		.smart_link:hover .txt_bx {
			border: solid 1px var(--ember-500);
			background-color: var(--ember-500);
		}

		.smart_link:hover .icn_bx {
			transform: translateX(5px);
		}
	}
</style>
