<template>
	<div class="uk-card uk-card-hover uk-card-default uk-width-auto">
		<div
			class="uk-card-header"
			@click="openProject"
		>
			<div
				class="uk-grid-small uk-flex-middle"
				uk-grid
			>
				<div class="uk-width-auto logo-container">
					<img
						class="uk-border-circle"
						width="50"
						:src="require(`../assets/images/${projectIcon(index)}`)"
					/>
				</div>
				<div class="uk-width-expand">
					<h3 class="uk-card-title uk-margin-remove-bottom uk-text-normal uk-text-uppercase">
						{{ projectName(index) }}
					</h3>
				</div>
			</div>
		</div>
		<div
			class="uk-card-body"
			@click="openProject"
		>
			<p>{{ projectDescription(index) }}</p>
		</div>
		<div class="uk-card-footer uk-flex">
			<div style="width: 50%">
				<span uk-icon="icon: star; ratio: 1"></span>
				<a
					:href="`https://github.com/${projectGithub(index)}`"
					target="_blank"
					class="uk-margin-small-left uk-button uk-button-text"
				>{{
            stargazers > 1 || stargazers === 0
              ? `${stargazers} Stargazers`
              : `${stargazers} Stargazer`
          }}</a>
			</div>
			<div style="width: 50%">
				<span uk-icon="icon: link; ratio: 1"></span>
				<a
					:href="projectURL(index)"
					target="_blank"
					class="uk-margin-small-left uk-button uk-button-text"
				>Website</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	props: {
		index: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		...mapGetters("projects", [
			"projectName",
			"projectDescription",
			"projectIcon",
			"projectGithub",
			"projectURL",
		]),
	},
	data() {
		return {
			stargazers: 0,
		};
	},
	async mounted() {
		try {
			const stargazers = await await this.$axios.$get(
				`https://api.github.com/repos/${this.projectGithub(
					this.index
				)}/stargazers`
			);
			if (stargazers.message === "Not Found") {
				this.stargazers = 0;
				return;
			}
			this.stargazers = stargazers.length > 0 ? stargazers.length : 0;
		} catch (e) {
			this.stargazers = 0;
		}
	},
	methods: {
		openProject() {
			window.open(this.projectURL(this.index), "_blank");
		},
	},
};
</script>

<style scoped>
.uk-card {
	min-width: 400px;
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 5px;
}

.logo-container {
	padding-left: 8px;
}

@media only screen and (max-width: 600px) {
	.uk-card {
		min-width: 90%;
		max-width: 90%;
	}
}

.uk-card-header {
	cursor: pointer;
}

.uk-card-body {
	cursor: pointer;
}

@media only screen and (min-width: 768px) {
	.uk-card-body {
		height: 50px;
	}
}

.uk-card-footer {
	padding-left: 8px;
	padding-right: 8px;
	max-height: 20px;
}
</style>