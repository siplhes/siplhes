// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=5",
      title: "Joseph Hurtado | Full Stack Developer",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: "https://siplhes.com" },
      ],
      meta: [
        { name: "description", content: "Full Stack Developer — Modern web applications with Vue.js, Nuxt, Laravel & Node.js. Open to freelance and collaboration." },
        { name: "author", content: "Joseph Hurtado" },
        { name: "theme-color", content: "#0a0a0a" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Joseph Hurtado — Portfolio" },
        { property: "og:title", content: "Joseph Hurtado | Full Stack Developer" },
        { property: "og:description", content: "Full Stack Developer — Modern web applications with Vue.js, Nuxt, Laravel & Node.js" },
        { property: "og:image", content: "https://i.imgur.com/ZhPz5xP.png" },
        { property: "og:url", content: "https://siplhes.com" },
        { property: "og:locale", content: "en_US" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Joseph Hurtado | Full Stack Developer" },
        { name: "twitter:description", content: "Full Stack Developer — Modern web applications with Vue.js, Nuxt, Laravel & Node.js" },
        { name: "twitter:image", content: "https://i.imgur.com/ZhPz5xP.png" },
        // SEO
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "googlebot", content: "index, follow" },
      ],
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  runtimeConfig: {
    s3: {
      accessKey: "",
      secretKey: "",
      region: "us-east-2",
      bucket: "",
    },
    public: {
      siteUrl: "https://siplhes.com",
      firebaseApiKey: "",
      firebaseAuthDomain: "",
      firebaseDatabaseUrl: "",
      firebaseProjectId: "",
      firebaseStorageBucket: "",
      firebaseMessagingSenderId: "",
      firebaseAppId: "",
    },
  },

  colorMode: {
    preference: "dark",
    dataValue: "theme",
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    config: {},
    viewer: true,
    exposeConfig: true,
  },

});