<script lang="ts">
	import { currentYear, isMenuOpen, scrollToSection, t } from '$lib';
	import { base } from '$app/paths';
	import SmartLink from '../ui/SmartLink.svelte';
	import LangSwitcher from '../system/LangSwitcher.svelte';
</script>

{#if $isMenuOpen}
	<menu class="menu_overlay">
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
		<div class="menu_overlay_content">
			<div class="menu_main">
				<div class="menu_link_wrapper">
					<h6>{$t('nav.sitemap')}</h6>
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
				</div>
				<div class="menu_others">
					<div class="menu_col">
						<h6>{$t('nav.follow')}</h6>
						<a href="https://codepen.io/dnbsammie" target="_blank">Codepen</a>
						<a href="https://colorswall.com/users/3710" target="_blank">ColorsWall</a>
						<a href="https://github.com/dnbsammie" target="_blank">Github</a>

						<a href="https://www.linkedin.com/in/seriveramosq/" target="_blank">LinkedIn </a>
					</div>
					<div class="menu_col">
						<h6>{$t('nav.language')}</h6>
						<LangSwitcher />
						<SmartLink
							href="mailto:seriveramosq@gmail.com"
							label={$t('nav.emailLabel')}
							icon="fa-solid fa-chevron-right"
							ariaLabel="email"
						/>
					</div>
				</div>
			</div>
		</div>
		<hr />
		<div class="menu_footer">
			<small class="copyright" aria-label="copyright"
				>&copy; {currentYear} Samuel Rivera. {$t('footer.copyright')}</small
			>
		</div>
	</menu>
{/if}

<style>
	.menu_overlay {
		inset: 0;
		width: 100%;
		height: 100%;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: calc(var(--space-xs) + 50px) var(--space-xs) var(--space-xs);
		gap: var(--space-sm);
		color: var(--gray-400);
		background: hsl(from var(--gray-950) h s l / 0.7);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		z-index: 4999;
	}
	/* Main Containers */
	.menu_overlay_content,
	.menu_footer {
		display: flex;
		justify-content: space-between;
	}

	.menu_overlay_content {
		flex: 1;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.menu_footer {
		flex-direction: row;
	}
	/* Inner Containers */
	.menu_link_wrapper,
	.menu_main,
	.menu_title {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.menu_link_wrapper {
		flex-direction: column;
		flex: 4;
	}

	.menu_main {
		flex: 1;
		gap: var(--space-md);
	}

	.menu_others {
		flex: 1;
		display: flex;
		justify-content: space-between;
	}

	.menu_title {
		position: absolute;
		flex-direction: row;
		align-items: flex-end;
		width: 100%;
		padding: var(--space-xs);
		z-index: -1;
	}

	/* Sub Containers */
	.menu_link {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: none;
		border: none;
		color: var(--gray-200);
		transition: all 0.3s ease;
	}

	.menu_link span {
		font-size: var(--font-size-h2);
	}

	.menu_col {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	@media (hover: hover) and (pointer: fine) {
		.menu_link:hover {
			color: var(--gray-50);
			transform: translateX(1rem);
		}
	}

	@media (min-width: 768px) {
		.menu_main {
			flex-direction: row;
		}

		.menu_link_wrapper,
		.menu_others {
			flex: 1;
		}
	}
</style>
