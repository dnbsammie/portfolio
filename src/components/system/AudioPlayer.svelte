<script lang="ts">
	let active = false;
</script>

<button
	class="audio_toggle {active ? 'is-active' : ''}"
	aria-label="audio player"
	aria-pressed={active}
	on:click={() => (active = !active)}
>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</button>

<style>
	.audio_toggle {
		cursor: pointer;
		position: relative;
		width: 20px;
		height: 20px;
		background: transparent;
		border: none;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0;
	}

	.audio_toggle span {
		width: 2px;
		height: 100%;
		background: var(--gray-300);
		transform-origin: bottom;
		transform: scaleY(0.2);
	}

	.audio_toggle.is-active span {
		animation: equalizer 1s ease-in-out infinite;
	}

	.audio_toggle span:nth-child(1) {
		animation-delay: 0s;
	}
	.audio_toggle span:nth-child(2) {
		animation-delay: 0.15s;
	}
	.audio_toggle span:nth-child(3) {
		animation-delay: 0.3s;
	}
	.audio_toggle span:nth-child(4) {
		animation-delay: 0.15s;
	}
	.audio_toggle span:nth-child(5) {
		animation-delay: 0s;
	}

	.audio_toggle span:nth-child(odd) {
		animation-duration: 0.8s;
	}

	.audio_toggle span:nth-child(even) {
		animation-duration: 1.1s;
	}

	.audio_toggle:active span {
		background: var(--gray-50);
	}

	@keyframes equalizer {
		0% {
			transform: scaleY(0.2);
		}
		25% {
			transform: scaleY(0.8);
		}
		50% {
			transform: scaleY(0.4);
		}
		75% {
			transform: scaleY(1);
		}
		100% {
			transform: scaleY(0.2);
		}
	}

	@media (hover: hover) and (pointer: fine) {
		.audio_toggle:hover span {
			background: var(--gray-50);
		}
	}
</style>
