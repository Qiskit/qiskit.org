import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  isMail (url: string): boolean {
    return url.startsWith('mailto')
  }

  isIdAnchor (url: string): boolean {
    return url.startsWith('#')
  }

  isInternal (url: string): boolean {
    return !(this.isExternal(url) || this.isMail(url)) || this.isIdAnchor(url)
  }
}
