// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://bitcoinitalianetwork.com/',
    name: 'Bitcoin Italia Network',
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/robots',
    "nuxt3-leaflet",
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    '@nuxtjs/storybook',
  ],

  storybook: {
    port: 6006, // Porta su cui eseguire Storybook
    storybookRoute: '/__storybook__', // Percorso per accedere a Storybook
  },

  robots: {
    configPath: 'config/robots.js',
  },

  gtag: {
    id: 'GTM-NJXDPR5Z',
  },

  sitemap: {
    sitemaps: {
      pages: {
        path: '/sitemap.xml',
        urls: [
          '/calendari',
          '/chisiamo',
          '/comunita',
          '/contattaci',
          '/documentazione',
          '/dove',
          '/eventi',
          '/formazione',
          '/hwallet',
          '/impara',
          '/libriamazon',
          '/meetups',
          '/podcast',
          '/prezzi',
          '/shop',
          '/wallet',
        ],
      },
      index: [
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_osn.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_l.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_c.xml' },
        { sitemap: 'https://bitcoinitalianetwork.com/sitemap_ost.xml' }
      ]
    }
  },

  compatibilityDate: '2024-11-22',
});