import Vue, { ComponentOptions } from 'vue'
import { Component } from 'vue-property-decorator'
import { Route } from 'vue-router'

// Patch the Component decorator to work with abstract classes.
// @ts-ignore is needed for avoiding the error:
// "Overload signatures must all be exported or non-exported."
// See https://github.com/microsoft/TypeScript/issues/21566#issuecomment-362462824
declare module 'vue-property-decorator' {
  abstract class _Abstract extends Vue {}
  // @ts-ignore
  function Component<V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends typeof _Abstract>(target: VC) => VC;
  // @ts-ignore
  function Component<VC extends typeof _Abstract>(target: VC): VC;
}

/**
 * The interface that all tracked pages must implement.
 */
interface TrackedPage extends Vue {
  routeName: string
}

type TrackedPageGuardNext = (to: ((vm: TrackedPage) => any)) => void

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
  beforeRouteEnter (_from: Route, _to: Route, next: TrackedPageGuardNext): any {
    next((pageComponent) => {
      if (!pageComponent.routeName) {
        return console.warn('Component', pageComponent,
          'is missing the \'routeName\' property, needed by analytics.')
      }
      pageComponent.$trackPage(
        pageComponent.routeName, pageComponent.$metaInfo.title)
    })
  }
}

export { TrackedPage }
