import type {
  CtaClickedEventSegmentSchema,
  PageLoadedEventSegmentSchema,
} from "~/types/segment";

/**
 * Set of configuration objects and flags required by Bluemix Analytics.
 * Main configuration objects are `_analytics`, `bluemixAnalytics` and
 * `digitalData`.
 *
 * See
 * https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
 * for default values.
 */
export interface AnalyticsContext {
  _analytics?: any;
  _analyticsReady?: Promise<Event>;
  bluemixAnalytics?: any;
  digitalData?: any;
}

declare global {
  interface Window extends AnalyticsContext {}
}

/**
 * Minimum configuration for the analytics system.
 * @param category Common Schema category
 * @param instanceId Common Schema instance ID
 * @param key Segment analytics public key
 * @param productCode Common Schema product code
 * @param productCodeType Common Schema product code type
 * @param productTitle Common Schema product title
 * @param UT30 Common Schema UT30
 */
function configureAnalytics(
  category: string,
  instanceId: string,
  key: string,
  productCode: string,
  productCodeType: string,
  productTitle: string,
  UT30: string
) {
  window._analytics = {
    segment_key: key,
    coremetrics: false,
    optimizely: false,
    googleAddServices: false,
    fullStory: false,
    autoPageEventSpa: false,
    autoFormEvents: false,
    autoPageView: false,
  };

  window.digitalData = {
    page: {
      pageInfo: {
        instanceId,
        productCode,
        productCodeType,
        productTitle,
        UT30,
        analytics: {
          category,
        },
      },
    },
  };
}

/**
 * This adds to the head the script tag with the configuration set in the env var.
 * @param url to connect with the analytics server
 */
function installAnalytics(url: string) {
  return new Promise<Event>((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = url || "";
    document.head.appendChild(script);
    script.onload = resolve;
    script.onerror = (err) => {
      // eslint-disable-next-line no-console
      console.warn("Error loading Bluemix Analytics script:", err);
      reject(err);
    };
  });
}

/**
 * Send a page visitation event to segment.
 * @param context the Bluemix Analytics object with the analytics configuration.
 * This is usually `window`.
 * @param routeName a unique name identifying the contents of the route.
 * @param title the title meta tag of the page
 */
function trackPage(
  context: AnalyticsContext,
  routeName: string,
  title: string
) {
  const runtimeConfig = useRuntimeConfig();
  const { bluemixAnalytics, digitalData } = context;

  if (!bluemixAnalytics || !digitalData) {
    return;
  }

  const category =
    runtimeConfig.public.IBM_ANALYTICS_SEGMENT_ANALYTICS_CATEGORY;
  const segmentOptions: PageLoadedEventSegmentSchema = {
    category,
    instanceId: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_INSTANCE_ID,
    navigationType: "pushState",
    productCode: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE,
    productCodeType:
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE_TYPE,
    productTitle: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_TITLE,
    title,
    UT30: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_UT30,
  };

  bluemixAnalytics.pageEvent(category, routeName, segmentOptions);
}

/**
 * Send the information of a CTA click event to Segment.
 * @param context Window that extends Bluemix Analytics configuration
 * @param cta The call to action
 * @param location Location in the UI
 */
function trackClickEvent(
  context: AnalyticsContext,
  cta: string,
  location: string
) {
  const runtimeConfig = useRuntimeConfig();
  const { bluemixAnalytics, digitalData } = context;

  if (!bluemixAnalytics || !digitalData) {
    return;
  }

  const segmentOptions: CtaClickedEventSegmentSchema = {
    category: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_ANALYTICS_CATEGORY,
    CTA: cta,
    instanceId: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_INSTANCE_ID,
    location,
    productCode: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE,
    productCodeType:
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE_TYPE,
    productTitle: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_TITLE,
    UT30: runtimeConfig.public.IBM_ANALYTICS_SEGMENT_UT30,
  };

  bluemixAnalytics.trackEvent("CTA Clicked", segmentOptions);
}

/**
 * Helper to wait until the analytics script is loaded
 * @param callback
 * @returns Promise<void>
 */
function afterAnalyticsReady<S extends any[]>(callback: (...S: any[]) => void) {
  return async function (...args: S) {
    try {
      await useState("analyticsReady").value;
      callback(window, ...args);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(err);
    }
  };
}

export const useSegment = () => {
  const nuxtApp = useNuxtApp();

  if (nuxtApp.ssrContext) {
    return {
      trackClickEvent: () => {},
      trackPage: () => {},
    };
  }

  const runtimeConfig = useRuntimeConfig();

  if (runtimeConfig.public.IBM_ANALYTICS_SEGMENT_ENABLED) {
    configureAnalytics(
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_ANALYTICS_CATEGORY,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_INSTANCE_ID,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_ANALYTICS_KEY,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_CODE_TYPE,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_PRODUCT_TITLE,
      runtimeConfig.public.IBM_ANALYTICS_SEGMENT_UT30
    );

    useState("analyticsReady", () =>
      installAnalytics(runtimeConfig.public.IBM_ANALYTICS_SEGMENT_SCRIPT_SRC)
    );
  }

  return {
    trackClickEvent: afterAnalyticsReady(trackClickEvent),
    trackPage: afterAnalyticsReady(trackPage),
  };
};
