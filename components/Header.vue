<template>
	<div class="uk-navbar-container uk-navbar-transparent">
		<div class="uk-container uk-container-expand">
			<nav class="uk-navbar">
				<div class="uk-navbar-left">
					<router-link
						class="uk-navbar-item uk-logo"
						to="/"
					>
						<img
							src="../assets/gray_shortnim_logo.svg"
							width="150"
							uk-svg
						/>
					</router-link>
				</div>

				<div class="uk-navbar-right">
					<div class="uk-navbar-item">
						<a
							class="uk-button uk-button-default tm-button-default uk-icon uk-flex uk-flex-between uk-flex-middle uk-padding-small uk-padding-remove-vertical"
							href="https://github.com/Albermonte/"
						>
							<span style="color: white">GITHUB</span>
							<span
								uk-icon="icon: github; ratio: 1"
								style="padding-left: 8px; color: white;"
							></span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
