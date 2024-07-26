// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    debug: true,
    locales: [
      {
        name: 'Français',
        iso: 'fr-CH',
        code: 'fr',
        file: 'fr.json',
      },
      {
        name: 'Deutsch',
        iso: 'de-CH',
        code: 'de',
        file: 'de.json',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'fr',
    strategy: 'prefix',
    customRoutes: 'config',
    experimental: {
      switchLocalePathLinkSSR: true,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: 'lang',
      alwaysRedirect: true,
      fallbackLocale: 'fr',
    },

    compilation: {
      strictMessage: false,
    },
  }
})
