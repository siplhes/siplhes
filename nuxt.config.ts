// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss"],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
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
    preference: "dark",
    dataValue: "theme",
  },
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    config: {},
    viewer: true,
    exposeConfig: true,
  },
  i18n: {
    strategy: "no_prefix",
    vueI18n: "~/i18n.config.ts",
    locales: ["en", "es"],
    defaultLocale: "en",
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
    },
  },
});