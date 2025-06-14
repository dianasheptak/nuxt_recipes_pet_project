// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4
  },
  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  site: {
    name: "Nuxt Recipes"
  },

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },

  colorMode: {
    preference: "light",
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  supabase: {
    redirectOptions: {
      include: ["/admin"],
    },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"]
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3001",
    },
    kitKey: process.env.KIT_KEY,
    kitSecret: process.env.KIT_SECRET,
  },
});