<template>
  <div>
    <div
      class="uk-section uk-flex uk-flex-middle uk-text-center"
      uk-height-viewport="offset-top: true"
    >
      <div class="uk-width-1-1">
        <div class="uk-container">
          <h1 style="color: white">Redirecting to:</h1>
          <a style="font-size: 35px; color: #FC8702">{{ `https://shortnim.ml/r#${hash}` }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "redirect",
  data() {
    return {
      hash: null,
    };
  },
  mounted() {
    this.hash = window.location.hash.substr(1);
    window.location.href = `https://shortnim.ml/r#${this.hash}`;
  },
};
</script>

<style>
</style>