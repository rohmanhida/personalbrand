// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ['normal', 'italic'],
    },
    families: [
      { name: 'JetBrains Mono', provider: 'fontsource' },
      { name: 'Varela Round', provider: 'fontsource' },
    ],
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
    plugins: [tailwindcss()],
  },
});
