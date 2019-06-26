/**
 * @license
 *
 * Copyright (c) 2019, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

export const trackClickEvent = ({ action, objectType, milestoneName }) => {
  if (window.bluemixAnalytics && window.digitalData) {
    let segmentEvent = {
      productTitle: window.digitalData.page.pageInfo.productTitle,
      category: window.digitalData.page.pageInfo.analytics.category,
      url: window.location.href,
      path: window.location.pathname,
      action: `${window.location.href} - Button Clicked: ${action}`,
      objectType,
      successFlag: true,
    };

    if (milestoneName) {
      segmentEvent = { ...segmentEvent, milestoneName };
    }

    window.bluemixAnalytics.trackEvent('Custom Event', segmentEvent);
  }
};

export const trackSelectCombo = data => {
  if (window.bluemixAnalytics && window.digitalData) {
    const segmentEvent = {
      productTitle: window.digitalData.page.pageInfo.productTitle,
      category: window.digitalData.page.pageInfo.analytics.category,
      url: window.location.href,
      path: window.location.pathname,
      action: `${window.location.href} - Language Changed to: ${data.text}`,
      objectType: 'Select Combobox',
      successFlag: true,
    };

    window.bluemixAnalytics.trackEvent('Custom Event', segmentEvent);
  }
};
