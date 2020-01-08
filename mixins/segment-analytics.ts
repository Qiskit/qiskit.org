import Vue from 'vue'
import { Component } from 'vue-property-decorator'

/**
 * Mixin enabling page visitation tracking in Bluemix Analytics. To use it:
 *
 * 1. Add the mixin to the page component:
 * ```js
 * import SegmentMixin from '~/mixins/segment-analytics.ts'
 * @Component({ mixins: [SegmentMixin] })
 * export default class extends Vue {}
 * ```
 *
 * 2. In the page component, add a title to the page:
 * ```js
 * @Component({
 *   head() {
 *     title: 'Some title'
 *   }
 *   ...
 * })
 * export default class extends Vue { ... }
 * ```
 *
 * 3. In the page component, add the `routeName` property set to a string
 * matching kebab-case and identifying the route regardless the URL changing
 * over time:
 * ```js
 * @Component({ ... })
 * export default class extends Vue {
 *   routeName: 'route-id'
 * }
 * ```
 */
@Component
export default class extends Vue {
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
