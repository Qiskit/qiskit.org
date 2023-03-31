// import pkg from "./package.json";
// import fetchEvents from "./hooks/update-events";
// import fetchAdvocates from "./hooks/update-advocates";
// import fetchEcosystemMembers from "./hooks/update-ecosystem";

// const { NODE_ENV, ENABLE_ANALYTICS, GENERATE_CONTENT, AIRTABLE_API_KEY } =
//   process.env;

// const IS_PRODUCTION = NODE_ENV === "production";

// export default defineNuxtConfig({
//   /*
//    ** Headers of the page
//    */
//   app: {
//     head: {
//       title: pkg.name,
//       meta: [
//         { charset: "utf-8" },
//         { name: "viewport", content: "width=device-width, initial-scale=1" },
//         { hid: "description", name: "description", content: pkg.description },
//       ],
//       link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
//     },
//   },

//   /*
//    ** Plugins to load before mounting the App.
//    */
//   plugins: [
//     // '~/plugins/router-hooks.ts',
//     // '~/plugins/carbon.ts',
//     // '~/plugins/deep-load.ts',
//     // { src: '~/plugins/hotjar.ts', mode: 'client' },
//     // ...optional(
//     //   IS_PRODUCTION || ENABLE_ANALYTICS,
//     //   { src: '~/plugins/segment-analytics.ts', mode: 'client' } as const
//     // )
//   ],
