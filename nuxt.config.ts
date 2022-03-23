import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: "static",

  // Target: https://go.nuxtjs.dev/config-target
  publicRuntimeConfig: {
      APP_TOKEN: process.env.APP_TOKEN,
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "abc",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
  },

  buildModules: [
    // "@nuxtjs/pwa",
    //'@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://sitemap.nuxtjs.org/guide/setup
    "@nuxtjs/sitemap",
    "@intlify/nuxt3",
  ],

  // config for `@intlify/nuxt3`
  intlify: {
    localeDir: "lang",
    vueI18n: {
      defaultLocale: "en",
      locale: "en",
    },
  },
  image: {},

  sitemap: {
    hostname: process.env.APP_URL,
    gzip: true,
  },

  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],
});
