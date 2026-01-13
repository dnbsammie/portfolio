<script lang="ts">
	import { currentYear, isMenuOpen, finishMenuAnimation, scrollToSection, t } from '$lib';
	import LangSwitcher from "../system/LangSwitcher.svelte";
	import SmartLink from "../ui/SmartLink.svelte";

	let overlay: HTMLElement;

	$: if ($isMenuOpen) {
		// animations in
	}

	$: if (!$isMenuOpen) {
		// animations out
	}
</script>

<div bind:this={overlay} 	class="menu_overlay"
	 class:open={$isMenuOpen}
	 aria-hidden={!$isMenuOpen}>
	<div class="menu_title">
		<span id="outline_text">S</span>
		<span id="outline_text">.</span>
		<span id="outline_text">R</span>
		<span id="outline_text">I</span>
		<span id="outline_text">V</span>
		<span id="outline_text">E</span>
		<span id="outline_text">R</span>
		<span id="outline_text">A</span>
	</div>
	<div class="menu_content">
		<button on:click={() => scrollToSection('index')} class="menu_link">
			<span>I</span>
			<span>N</span>
			<span>D</span>
			<span>E</span>
			<span>X</span>
		</button>
		<button on:click={() => scrollToSection('work')} class="menu_link">
			<span>W</span>
			<span>O</span>
			<span>R</span>
			<span>K</span>
		</button>
		<button on:click={() => scrollToSection('core')} class="menu_link">
			<span>C</span>
			<span>O</span>
			<span>R</span>
			<span>E</span>
		</button>
		<button on:click={() => scrollToSection('stack')} class="menu_link">
			<span>S</span>
			<span>T</span>
			<span>A</span>
			<span>C</span>
			<span>K</span>
		</button>
		<button on:click={() => scrollToSection('insights')} class="menu_link">
			<span>I</span>
			<span>N</span>
			<span>S</span>
			<span>I</span>
			<span>G</span>
			<span>H</span>
			<span>T</span>
			<span>S</span>
		</button>
		<div class="menu_socials">
			<a href="https://codepen.io/dnbsammie" target="_blank" rel="noopener noreferrer"
			>Codepen</a
			>
			<a href="https://colorswall.com/users/3710" target="_blank" rel="noopener noreferrer"
			>ColorsWall</a
			>
			<a href="https://github.com/dnbsammie" target="_blank" rel="noopener noreferrer">Github</a
			>
			<a
					href="https://www.linkedin.com/in/seriveramosq/"
					target="_blank"
					rel="noopener noreferrer"
			>LinkedIn
			</a>
		</div>
		<hr>
		<div class="menu_footer">
			<small class="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera. {$t('footer.copyright')}</small>
			<LangSwitcher />
		</div>
	</div>
</div>

<style>
	.menu_overlay {
		inset: 0;
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: var(--space-xs);
		gap: var(--space-sm);
		color: var(--gray-200);
		background: hsl(from var(--gray-950) h s l / 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		z-index: 4999;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-100%);
		transition:
				opacity 0.4s ease,
				transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
	}

	.menu_overlay.open {
		opacity: 1;
		pointer-events: auto;
		transform: translateY(0);
	}

	.menu_title{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}

	.menu_content{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.menu_footer,
	.menu_socials {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.menu_footer, .menu_socials {
		flex-direction: row;
	}

	.menu_socials {
		justify-content: center;
		gap: var(--space-xs);
	}

	.menu_footer {
		justify-content: space-between;
	}

	.menu_link {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: none;
		border: none;
		color: var(--gray-300);
		transition: all 0.3s ease;
	}

	.menu_link span {
		font-size: var(--font-size-h5);
	}

	@media (hover: hover) and (pointer: fine) {
		.menu_link:hover {
			color: var(--accent-50);
			transform: translatey(0.5rem);
		}
	}
</style>
