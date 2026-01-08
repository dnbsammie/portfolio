<script lang="ts">
	import { lang } from '$lib';
</script>

<nav class="lang_switcher" aria-label="Language selector">
	<button
		class="toggle_lang"
		class:used={$lang === 'en'}
		on:click={() => lang.set('en')}
		aria-pressed={$lang === 'en'}
	>
		EN
	</button>
	<button
		class="toggle_lang"
		class:used={$lang === 'es'}
		on:click={() => lang.set('es')}
		aria-pressed={$lang === 'es'}
	>
		ES
	</button>
</nav>

<style>
	.lang_switcher {
		mix-blend-mode: difference;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		background: transparent;
		align-items: center;
		gap: var(--space-xs);
	}

	.toggle_lang {
		position: relative;
		mix-blend-mode: difference;
		border: none;
		background: none;
		font-size: var(--font-size-small);
		color: hsl(from var(--gray-500) h s l / 0.8);
		transition: all 0.2s ease-in-out;
	}

	.toggle_lang:active {
		color: var(--gray-50);
	}

	.toggle_lang.used {
		color: var(--ember-300);
	}

	@media (hover: hover) and (pointer: fine) {
		.toggle_lang:hover {
			color: var(--gray-50);
		}
	}
</style>
