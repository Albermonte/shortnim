<template>
  <div class="uk-section" uk-height-viewport="offset-top: true">
    <div class="uk-container">
      <div class="uk-margin uk-grid-match uk-grid-large uk-text-center uk-flex-center" uk-grid>
        <div v-for="(i, index) in projectsCount" :key="index">
          <ProjectCard :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    ProjectCard
  },
  computed: mapGetters(["projectsCount"])
};
</script>