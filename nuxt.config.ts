import fetchEvents from "./hooks/update-events";
import fetchAdvocates from "./hooks/update-advocates";
import fetchEcosystemMembers from "./hooks/update-ecosystem";
import pkg from "./package.json";

const { AIRTABLE_API_KEY, GENERATE_CONTENT, NODE_ENV } = process.env;
const IS_PRODUCTION = NODE_ENV === "production";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { hid: "description", name: "description", content: pkg.description },
      ],
    },
  },

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

  hooks: {
    "build:before": async () => {
      if (IS_PRODUCTION || GENERATE_CONTENT) {
        await generateContent();
      }
    },
  },

  ssr: false,

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        tag.startsWith("qiskit-") || tag.startsWith("bx-"),
    },
  },
});

/**
 * Fetches data from Airtable and generates the advocates, ecosystem and events
 * content.
 * @returns A promise that resolves when the content has been generated
 */
async function generateContent() {
  // eslint-disable-next-line no-console
  console.info("Generating the ecosystem content...");
  await fetchEcosystemMembers("./content/ecosystem");

  if (AIRTABLE_API_KEY) {
    // eslint-disable-next-line no-console
    console.info("Generating the events content...");
    await fetchEvents(AIRTABLE_API_KEY, "./content/events");

    // eslint-disable-next-line no-console
    console.info("Generating the advocates content...");
    await fetchAdvocates(AIRTABLE_API_KEY, "./content/advocates");
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      "No AIRTABLE_API_KEY environment variable found. Skipping content generation."
    );
  }
}
