/**
 * Needed to trigger router hooks when used with the Component decorator.
 * https://github.com/vuejs/vue-class-component#adding-custom-hooks
 */
import { Component } from 'vue-property-decorator'
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
