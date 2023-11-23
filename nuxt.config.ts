import { defineNuxtConfig } from "nuxt/config";
import fetchEvents from "./hooks/update-events";
import fetchAdvocates from "./hooks/update-advocates";
import fetchFallFestEvents from "./hooks/update-fall-fest-events";
import { generateMocks } from "./hooks/mock/mock-service";

const { AIRTABLE_API_KEY, GENERATE_CONTENT, NODE_ENV, SITE_URL, MOCK_CONTENT } =
  process.env;
const IS_PRODUCTION = NODE_ENV === "production";
const siteUrl = SITE_URL || "https://qiskit.org";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image-edge", "nuxt-schema-org"],

  schemaOrg: {
    host: siteUrl,
  },

  runtimeConfig: {
    public: {
      IBM_ANALYTICS_SEGMENT_ANALYTICS_CATEGORY: "",
      IBM_ANALYTICS_SEGMENT_INSTANCE_ID: "",
      IBM_ANALYTICS_SEGMENT_ANALYTICS_KEY: "",
      IBM_ANALYTICS_SEGMENT_ENABLED: IS_PRODUCTION,
      IBM_ANALYTICS_SEGMENT_PRODUCT_CODE: "",
      IBM_ANALYTICS_SEGMENT_PRODUCT_CODE_TYPE: "",
      IBM_ANALYTICS_SEGMENT_PRODUCT_TITLE: "",
      IBM_ANALYTICS_SEGMENT_SCRIPT_SRC: "",
      IBM_ANALYTICS_SEGMENT_UT30: "",
      siteUrl,
    },
  },

  css: ["~/assets/scss/main.scss"],

  app: {
    head: {
      script: [
        // Alchemer Beacon
        {
          children: `(function(d,e,j,h,f,c,b){d.SurveyGizmoBeacon=f;d[f]=d[f]||function(){(d[f].q=d[f].q||[]).push(arguments)};c=e.createElement(j),b=e.getElementsByTagName(j)[0];c.async=1;c.src=h;b.parentNode.insertBefore(c,b)})(window,document,'script','//d2bnxibecyz4h5.cloudfront.net/runtimejs/intercept/intercept.js','sg_beacon');sg_beacon('init','MzI0MTk0LTBjOWMxOGI3ZDVkMTg3ZGE0MmQ2ZjNkMTg0NDZjYjkxMTdkNDExMWFkYzQ0ZGIxNGY4');`,
          body: true,
        },
      ],
    },
  },

  hooks: {
    "build:before": async () => {
      if (IS_PRODUCTION || GENERATE_CONTENT) {
        await generateContent();
      }
    },
  },

  image: {
    inject: true,
    screens: {
      sm: 320,
      md: 672,
      lg: 1056,
      xl: 1312,
      xxl: 1584,
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        tag.startsWith("qiskit-") || tag.startsWith("bx-"),
    },
  },
});

/**
 * Fetches data from Airtable and generates the advocates and events
 * content.
 * @returns A promise that resolves when the content has been generated
 */
async function generateContent() {
  if (MOCK_CONTENT && MOCK_CONTENT === "true") {
    // eslint-disable-next-line no-console
    console.info("Mocking content...");
    await generateMocks();
    // eslint-disable-next-line no-console
    console.info("Content generated...");
    return;
  }

  if (AIRTABLE_API_KEY) {
    // eslint-disable-next-line no-console
    console.info("Generating the events content...");
    await fetchEvents(AIRTABLE_API_KEY, "./content/events");

    // eslint-disable-next-line no-console
    console.info("Generating the fall fest events content...");
    await fetchFallFestEvents(AIRTABLE_API_KEY, "./content/fall-fest-events");

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
