// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
  ],
  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    config: {},
    viewer: true,
    exposeConfig: true,
  },
  i18n: {
    vueI18n: "~/i18n.config.ts",
    locales: [
      { code: "en", language: "en-US" },
      { code: "es", language: "es-ES" },
    ],
    defaultLocale: "en",
  },
});