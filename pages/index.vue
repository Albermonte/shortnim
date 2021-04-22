<template>
	<div>
		<div
			class="uk-section uk-section-small uk-flex uk-flex-middle uk-text-center"
			uk-height-viewport="offset-top: true; offset-bottom: true"
		>
			<div class="uk-width-1-1">
				<div class="uk-container uk-flex uk-flex-column uk-flex-middle">
					<p>
						<img
							:src="require(`@/assets/shortnim_logo_only.svg`)"
							width="170"
							uk-svg
						/>
					</p>

					<p
						class="uk-margin-medium uk-text-lead"
						style="color: white"
					>
						The shortest path to start using NIM, easy and fast
						<br />Mining, shorting URLs, tipping on Telegram
						<br class="uk-visible@s" />and more to come...
					</p>

					<div
						class="uk-child-width-auto uk-grid-medium uk-flex-inline uk-flex-center"
						uk-grid
						style="margin-top: 15px;"
					>
						<div>
							<router-link
								class="uk-button button-gold tm-button-primary uk-button-large tm-button-large uk-visible@s uk-text-bolder"
								style="color: white; font-size: 15px;"
								to="projects"
							>Get Started</router-link>
							<router-link
								class="uk-button button-gold tm-button-primary uk-hidden@s uk-text-bolder"
								style="color: white; font-size: 15px;"
								to="projects"
							>Get Started</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="uk-section-small">
			<div class="uk-container uk-container-expand uk-text-center uk-position-relative">
				<ul
					class="uk-subnav tm-subnav uk-flex-inline uk-flex-center uk-margin-remove-bottom uk-flex uk-flex-middle"
					uk-margin
				>
					<li>
						<div style="color: #cacaca;">2018 - {{ year_copyright || 'Today'}} &copy; ShortNIM</div>
					</li>
					<li>
						<client-only>
							<div><a
									href="https://wallet.nimiq.com/nimiq:NQ65GS91H8CSQFAN1EVSUK3GX7PLL9N1X4KC"
									target="_blank"
								><img :src="require(`@/assets/green-small.svg`)" /></a></div>
						</client-only>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LandingPage",
	data() {
		return {
			year_copyright: 0,
		};
	},
	mounted() {
		this.year_copyright = new Date().getFullYear();
	},
};
</script>

<style scoped>
.button-gold {
	background: #e9b213;
	background-image: radial-gradient(
		100% 100% at bottom right,
		#ec991c,
		#e9b213
	);
}
</style>