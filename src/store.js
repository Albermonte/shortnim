import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects_array: [
      {
        name: "NIM Pools Hub",
        description:
          "A place where new miners can start mining NIM in the easiest way possible",
        github_url: "Albermonte/NIM-Pools-Hub",
        url: "https://hub.shortnim.me/",
        icon: "nimpoolshub.png",
      },
      {
        name: "NIM Pools Hub Miner",
        description:
          "CPU/GPU Nimiq GUI Miner. Available for Windows, Mac and Linux",
        github_url: "Albermonte/NIM-Pools-Hub-Miner",
        url:
          "https://github.com/Albermonte/nim-pools-hub-miner/releases/latest",
        icon: "nimpoolshubminer.png",
      },
      {
        name: "Nimiq Shortener",
        description:
          "Short your longs URLs and earn NIM sharing the shorted URLs",
        github_url: "Albermonte/nimiq-shortener",
        url: "https://shortnim.ml/",
        icon: "shortnim_logo.png",
      },
      {
        name: "Web Miner Addon",
        description:
          "Nimiq Web Miner with a pretty UI and easy to install and use. Get revenue from your website's visitors",
        github_url: "Albermonte/webminer-addon",
        url: "https://github.com/Albermonte/webminer-addon",
        icon: "webminer_addon.png",
      },
      {
        name: "HMTSIU",
        description:
          "How Many Threads Should I Use for mining without affecting UX",
        github_url: "Albermonte/HMTSIU",
        url: "https://github.com/Albermonte/HMTSIU",
        icon: "hmtsiu.png",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    projectsCount: (state) => state.projects_array.length,
    projectIcon: (state) => (i) => state.projects_array[i].icon,
    projectName: (state) => (i) => state.projects_array[i].name,
    projectDescription: (state) => (i) => state.projects_array[i].description,
    projectGithub: (state) => (i) => state.projects_array[i].github_url,
    projectURL: (state) => (i) => state.projects_array[i].url,
  },
});
