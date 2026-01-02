<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="contact" id="contact" aria-labelledby="footer">
	<div class="f_container">
		<canvas class="f_canvas"></canvas>
		<div class="f_content">
			<div class="f_head">
				<a href="#index">Back to Top</a>
				<h3>Lorem ipsum dolor sit.</h3>
			</div>
			<div class="f_info">
				<div class="f_col" id="paragraph">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis impedit
						perferendis nihil beatae ipsam cum ut dignissimos molestiae iste.
					</p>

					<button class="anchor_btn">
						<span class="txt_bx">Get In Touch</span>
						<span class="icn_box"></span>
					</button>
				</div>
				<div class="f_col" id="media">
					<div class="f_sub_col" id="social">
						<h6>Lorem Ipsum</h6>
						<a href="https://www.linkedin.com/in/seriveramosq/" target="_blank">LinkedIn</a>
						<a href="https://github.com/dnbsammie" target="_blank">Github</a>
						<a href="https://codepen.io/dnbsammie" target="_blank">Codepen</a>
						<a href="https://colorswall.com/users/3710" target="_blank">ColorsWall</a>
					</div>
					<div class="f_sub_col" id="sitemap">
						<h6>Lorem Ipsum</h6>
						<a href="#index">Index</a>
						<a href="#work">Work</a>
						<a href="#core">Core</a>
						<a href="#stack">Stack</a>
						<a href="#insights">Insights</a>
					</div>
				</div>
			</div>
			<div class="f_bottom">
				<small class="copyright" aria-label="copyright">&copy; {currentYear} Samuel Rivera.</small>
				<a href="/404" class="fallback">404</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		bottom: 0;
		width: 100%;
		height: 75svh;
		background-color: var(--gray-50);
		color: var(--gray-800);
		overflow: hidden;
	}
	/* ── Containers ── */
	.f_container {
		position: relative;
		max-width: var(--max-width-xl);
		width: 100%;
		height: 100%;
		padding: var(--space-lg) var(--space-sm) var(--space-sm);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* transform: translateY(-35%);
		will-change: transform; */
	}

	.f_canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		opacity: 0.5;
		z-index: -1;
	}

	.f_content {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: var(--space-xs);
		z-index: 1;
	}
	/* ── Inner Div's ── */
	.f_content > div {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: var(--space-xs);
	}
	/* ── Top ── */
	.f_head {
		flex-direction: column;
	}
	/* ── Mid ── */
	.f_info {
		flex-direction: column;
	}

	.f_col {
		flex: 1;
	}

	#paragraph p {
		width: 100%;
	}

	#media {
		display: flex;
	}

	.f_sub_col {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	/* ── Bot ── */
	.f_bottom {
		flex-direction: row;
		margin-top: auto;
		border-top: 1px solid var(--gray-950);
		align-items: flex-end;
		height: 2rem;
	}

	@media (min-width: 768px) {
		.f_info {
			flex-direction: row;
		}

		#paragraph {
			flex: 2;
		}

		#paragraph p {
			width: 75%;
		}
	}
</style>
