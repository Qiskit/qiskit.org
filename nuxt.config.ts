// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        tag.startsWith("qiskit-") || tag.startsWith("bx-"),
    },
  },
  modules: [
    [
      "nuxt3-lazy-load",
      {
        videos: true,
        directiveOnly: true,
      },
    ],
  ],
});
