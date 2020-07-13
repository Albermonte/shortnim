<template>
  <div id="app" class="background-gradient">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import Header from "@/components/Header";

UIkit.use(Icons);

export default {
  name: "App",
  components: {
    Header
  }
};
</script>>

<style lang="less">
@import "./assets/less/theme.less";

.background-gradient {
  background-image: linear-gradient(#265dd7, #0582ca);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
