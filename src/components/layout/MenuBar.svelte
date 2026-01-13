<script lang="ts">
	import { favicon } from '$lib';
	import { base } from '$app/paths';
	import AudioPlayer from '../system/AudioPlayer.svelte';
	import MenuToggle from '../ui/MenuToggle.svelte';
</script>

<div class="menu-bar">
	<div class="logo">
		<a href={base} rel="external">
			<img src={favicon} alt="logo" />
		</a>
	</div>
	<div class="audio">
		<AudioPlayer />
	</div>
	<div class="toggle">
		<MenuToggle />
	</div>
</div>

<style>
	.menu-bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 3.125rem;
		padding: var(--space-xs);
		color: var(--gray-300);
		mix-blend-mode: difference;
		z-index: 5000;
	}

	.menu-bar > div {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.menu-bar a:active {
		color: var(--gray-50);
	}

	.logo {
		justify-content: flex-start;
	}

	.audio {
		justify-content: center;
	}

	.logo img {
		aspect-ratio: 1/1;
		width: 20px;
		height: 20px;
	}

	.toggle {
		justify-content: flex-end;
	}

	@media (hover: hover) and (pointer: fine) {
		.menu-bar a:hover {
			color: var(--gray-50);
		}
	}
</style>
