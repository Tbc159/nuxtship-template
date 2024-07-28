// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', '@nuxtjs/robots', "nuxt3-leaflet", "nuxt-gtag"],
  robots: {
    configPath: 'config/robots.js',
  },
  gtag: {
    id: 'GTM-NJXDPR5Z',
  }
});