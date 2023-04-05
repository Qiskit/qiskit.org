declare global {
  interface Window {
    hj: any;
    _hjSettings: any;
  }
}

export default defineNuxtPlugin(() => {
  (function (h, o, t, j, a?: any, r?: any) {
    h.hj =
      h.hj ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 1586421, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
});
