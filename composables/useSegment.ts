import type { CtaClickedEventSegmentSchema } from "~/types/segment";

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

function getOrFailProductTitle(digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.productTitle,
    "`digitalData.page.pageInfo.productTitle` is missing"
  );
}

function getOrFailCategory(digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.analytics.category,
    "`digitalData.page.pageInfo.analytics.category` is missing"
  );
}

function assertCanGet<T>(getter: () => T, error: string): T {
  let result;
  try {
    result = getter();
  } catch (ex) {}
  if (!result) {
    throw new Error(error);
  }
  return result;
}

/**
 * Minimum configutarion for the analytics system.
 * @param key public key to send analytics
 */
function configureAnalytics(key: string) {
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
        productTitle: "IBM Q Experience",
        analytics: {
          category: "Qiskit.org",
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
  const { bluemixAnalytics, digitalData } = context;

  if (!bluemixAnalytics || !digitalData) {
    return;
  }

  const category = getOrFailCategory(digitalData);
  const productTitle = getOrFailProductTitle(digitalData);

  bluemixAnalytics.pageEvent(category, routeName, {
    navigationType: "pushState",
    productTitle,
    title,
  });
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
  const { bluemixAnalytics, digitalData } = context;

  if (!bluemixAnalytics || !digitalData) {
    return;
  }

  const productTitle = getOrFailProductTitle(digitalData);
  const category = getOrFailCategory(digitalData);

  const segmentOptions: CtaClickedEventSegmentSchema = {
    category,
    CTA: cta,
    location,
    productTitle,
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
  const runtimeConfig = useRuntimeConfig();

  if (runtimeConfig.public.isAnalyticsEnabled) {
    configureAnalytics(runtimeConfig.public.analyticsKey);

    useState("analyticsReady", () =>
      installAnalytics(runtimeConfig.public.analyticsScriptUrl)
    );
  }

  return {
    trackClickEvent: afterAnalyticsReady(trackClickEvent),
    trackPage: afterAnalyticsReady(trackPage),
  };
};
