<script lang="ts">
	import { t } from '$lib';
</script>

<section id="stack" class="stack" aria-labelledby="stack-section">
	<div class="stack_content">
		<div class="stack_img">
			<img src="https://placehold.co/450x1050/ff6d4d/ffc6b3/?text=Stack+Img&font=raleway" alt="">
		</div>
		<div class="stack_items">
			<div class="stack_description">
				<h2>{$t('stack.title')}</h2>
				<h5>{$t('stack.intro')}</h5>
				<hr>
			</div>
			<div class="stack_list">
				<div class="stack_col">
					<h4>{$t('stack.frontend.title')}</h4>
					<p>{$t('stack.frontend.description')}</p>
					<hr>
				</div>
				<div class="stack_col">
					<h4>{$t('stack.backend.title')}</h4>
					<p>{$t('stack.backend.description')}</p>
					<hr>
				</div>
				<div class="stack_col">
					<h4>{$t('stack.data.title')}</h4>
					<p>{$t('stack.data.description')}</p>
					<hr>
				</div>
				<div class="stack_col">
					<h4>{$t('stack.design.title')}</h4>
					<p>{$t('stack.design.description')}</p>
					<hr>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	#stack {
		display: flex;
		justify-content: center;
		height: 150svh;
		gap: var(--space-xs);
		padding: var(--space-md) var(--space-xs);
		background: var(--gray-50);
		color: var(--gray-700);
	}

	.stack_content{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: var(--space-xs);
		max-width: var(--max-width-xl);
	}

	.stack_items,
	.stack_description,
	.stack_list
	,.stack_col{
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.stack_description {
		justify-content: space-around;
	}

	.stack_col{
		justify-content: space-between;
	}


	.stack_img img{
		width: 100%;
		height: auto;
		aspect-ratio: 1/1;
	}

	@media(min-width:768px){
		.stack_content{
			gap:var(--space-md);
			flex-direction: row;
		}

		.stack_description{
			justify-content: flex-start;
			gap: var(--space-md);
		}

		.stack_items{
			flex: 2;
		}

		.stack_img{
			flex: 1;
		}

		.stack_img img{
			top: 50px;
			position: sticky;
			aspect-ratio: 3/4;
		}
	}
</style>
