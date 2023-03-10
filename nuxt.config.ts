const { NODE_ENV } = process.env;
const IS_PRODUCTION = NODE_ENV === "production";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      analyticsScriptUrl: IS_PRODUCTION
        ? "https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js"
        : "https://dev.console.test.cloud.ibm.com/analytics/build/bluemix-analytics.min.js",
      analyticsKey: IS_PRODUCTION
        ? "ffdYLviQze3kzomaINXNk6NwpY9LlXcw"
        : "zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H",
      isAnalyticsEnabled: true,
    },
  },
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        tag.startsWith("qiskit-") || tag.startsWith("bx-"),
    },
  },
});
