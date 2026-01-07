<script lang="ts">
	import { isMenuOpen, toggleMenu } from '$lib/stores/menu';
</script>

<button
	class="burger"
	class:active={$isMenuOpen}
	aria-label="menu hamburger icon"
	aria-pressed={$isMenuOpen}
	on:click={toggleMenu}
>
	<span></span>
	<span></span>
	<span></span>
</button>

<style>
	/* == Burger / Toggle ==*/
	.burger {
		cursor: pointer;
		position: relative;
		width: 20px;
		height: 20px;
		background: transparent;
		border: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0;
	}

	.burger span {
		display: block;
		width: 20px;
		height: 2px;
		background: var(--gray-300);
		transition: all 0.5s ease;
		position: relative;
	}

	.burger:active span {
		background: var(--gray-50);
	}

	.burger:active span:nth-child(1),
	.burger.active:active span:nth-child(1) {
		transform: translateY(10px);
		opacity: 0;
	}

	.burger:active span:nth-child(3),
	.burger.active:active span:nth-child(3) {
		transform: translateY(-10px);
		opacity: 0;
	}

	.burger.active span:nth-child(1) {
		transform: translateY(9px) rotate(45deg);
	}

	.burger.active span:nth-child(2) {
		opacity: 0;
	}

	.burger.active:active span:nth-child(2) {
		opacity: 1;
	}

	.burger.active span:nth-child(3) {
		transform: translateY(-9px) rotate(-45deg);
	}
	@media (hover: hover) and (pointer: fine) {
		.burger:hover span {
			background: var(--gray-50);
		}

		.burger:hover span:nth-child(1) {
			transform: translateY(10px);
			opacity: 0;
		}

		.burger.active:hover span:nth-child(2) {
			opacity: 1;
		}

		.burger:hover span:nth-child(3) {
			transform: translateY(-10px);
			opacity: 0;
		}
	}
</style>
