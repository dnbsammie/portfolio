<script lang="ts">
	export let label: string | null = null;
	export let icon: string | null = null;
	export let ariaLabel: string | null = null;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button class="icn_btn" {type} {disabled} aria-label={ariaLabel || label || null} on:click>
	<span class="txt_bx">{label}</span>

	{#if icon}
		<span class="icn_bx">
			<i class={icon} aria-hidden="true"></i>
		</span>
	{/if}
</button>
