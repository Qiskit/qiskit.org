/**
 * Mixin enabling page visitation tracking in Bluemix Analytics. To use it:
 * 1. Add the mixin to the page component.
 * 2. In the page component, include the title of the page in the meta info.
 * 3. In the page component, add the `routeName` property set to a string
 * identifying the route regardless the URL changing over time.
 */
export default {
  beforeRouteEnter (_to, _from, next) {
    next(pageComponent => {
      if (!pageComponent.routeName) {
        return console.warn('Component', pageComponent,
          'is missing the \'routeName\' property, needed by analytics.')
      }
      pageComponent.$trackPage(
        pageComponent.routeName, pageComponent.$metaInfo.title)
    })
  }
}
