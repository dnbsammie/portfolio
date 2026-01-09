<script lang="ts">
	export let tone: 'light' | 'dark' = 'light';
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
	class="icn_btn"
	class:dark={tone === 'dark'}
	class:light={tone === 'light'}
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
