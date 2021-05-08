export const state = () => ({
  projects_array: [
    {
      name: "Nimiq Sunset Cyberspace",
      description:
        "Score points, beat your own records and earn as many NIM as you can meanwhile",
      github_url: "Albermonte/Nimiq-Sunset-Cyberspace",
      url:
        "https://play.google.com/store/apps/details?id=com.nimiqsunsetcyberspace",
      icon: "cyberspace-icon.png",
    },
    {
      name: "Nimiq Multi Cashlink",
      description:
        "Create and manage multiple cashlinks on one site",
      github_url: "Albermonte/Nimiq-Multi-Cashlink",
      url:
        "https://cashlinks.shortnim.me/",
      icon: "multicashlinks.png",
    },
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
      name: "NIM Pools Hub App",
      description:
        "Nimiq Pools monitor for Android, check your miner realtime, receive notifications on new payout, etc.",
      github_url: "Albermonte/NIM-Pools-Hub",
      url:
        "https://play.google.com/store/apps/details?id=com.albermonte.nimpoolshub",
      icon: "nimpoolshubminer.png",
    },
    {
      name: "NIM Tip Bot",
      description:
        " A Tip Bot to Tip Humans using the Nimiq tech. Tips are decentralized and each tip is processed on chain. Every user is in total control of their wallets even if the bot is offline",
      github_url: "Albermonte/nim-tip-bot",
      url: "https://t.me/NimiqTip_bot",
      icon: "nimtipbot.png",
    },
    {
      name: "Nimiq Shortener",
      description:
        "Short your longs URLs and earn NIM sharing the shorted URLs",
      github_url: "Albermonte/nimiq-shortener",
      url: "https://shortnim.now.sh/",
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
});

export const getters = {
  projectsCount: (state) => state.projects_array.length,
  projectIcon: (state) => (i) => state.projects_array[i].icon,
  projectName: (state) => (i) => state.projects_array[i].name,
  projectDescription: (state) => (i) => state.projects_array[i].description,
  projectGithub: (state) => (i) => state.projects_array[i].github_url,
  projectURL: (state) => (i) => state.projects_array[i].url,
};