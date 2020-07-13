import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./views/LandingPage";
import Projects from "./views/Projects.vue";
import Redirect from "./views/Redirect.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/r",
      name: "redirect",
      component: Redirect,
    },
  ],
});
