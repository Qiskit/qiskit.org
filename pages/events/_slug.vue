<template>
  <div class="individual-event">
    <EventMenu>
      <li
        v-for="link in event.attributes.nav"
        :key="link.goTo"
      >
        <nuxt-link :to="link.goTo">
          {{ link.text }}
        </nuxt-link>
      </li>
    </EventMenu>
    <header
      class="event-header"
    >
      <div class="event-header__live-background" />
      <div class="event-header__info-layout">
        <section class="event-header__title-layout">
          <h1 class="event-header__title">
            {{ event.attributes.title }}
          </h1>
          <p class="event-header__slack">
            or ask any question in <br>
            <AppLink url="http://ibm.co/joinqiskitslack">
              <img
                src="/images/slack-logo.png"
                alt="Slack logo"
                class="event-header__slack-logo"
              >
              <ArrowRight20 class="event-header__slack-arrow" />
            </AppLink>
          </p>
        </section>
        <aside
          class="
            event-header__summary
            event-summary
          "
        >
          <div
            class="event-summary__picture"
            :style="`background-image: url(${uri.lBackground})`"
          />
          <dl class="event-summary__info">
            <div class="event-summary__info-item">
              <dt class="event-summary__info-item-label">
                Location <ArrowRight20 class="event-summary__info-item-icon" />
              </dt>
              <dd class="event-summary__info-item-data">
                {{ event.attributes.location }}
              </dd>
            </div>
            <div class="event-summary__info-item">
              <dt class="event-summary__info-item-label">
                Dates <ArrowRight20 class="event-summary__info-item-icon" />
              </dt>
              <dd class="event-summary__infor-item-data">
                {{ event.attributes.dates }}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </header>
    <main class="individual-event__main" v-html="event.html" />
    <EventFooter />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import AppLink from '~/components/ui/AppLink.vue'
import EventMenu from '~/components/events/EventMenu.vue'
import EventFooter from '~/components/events/EventFooter.vue'

function getBackgroundUris (background: string): [string, string] {
  const bgRoute = '/images/events/headers/'
  const lBackgroundUri = `${bgRoute}${background}-low-res.jpg`
  const hBackgroundUri = `${bgRoute}${background}-hi-res.jpg`
  return [lBackgroundUri, hBackgroundUri]
}

@Component({
  layout: 'event',
  components: {
    EventMenu,
    EventFooter,
    AppLink
  },
  head () {
    const self = this as any

    return {
      title: self.title,
      bodyAttrs: {
        id: 'event-body'
      }
    }
  },
  async asyncData (context: Context) {
    const sourceName = context.route.params.slug
    if (sourceName === 'undefined') {
      return
    }
    const definition = await import(`~/content/events/${sourceName}.md`)
    const [lBackgroundUri, hBackgroundUri] =
      getBackgroundUris(definition.attributes.background)
    return {
      event: definition,
      uri: {
        hBackground: hBackgroundUri,
        lBackground: lBackgroundUri
      }
    }
  }
})
export default class extends QiskitPage {
  routeName = 'events-entry'

  mounted () {
    const { coordinates } = this.$data.event.attributes
    const container = document.querySelector('.event-header__live-background')
    if (!container) { return }
    const dimensions = container.getBoundingClientRect()
    const Globe = require('globe.gl').default
    const eventsGlobe = Globe()
    const globeFactory = eventsGlobe
      .width(dimensions.width)
      .height(dimensions.height)
      .globeImageUrl('/images/events/earth-bw.png')
      .showAtmosphere(false)
      .backgroundColor('#000000')
      .pointsData([coordinates])
      .pointColor(() => '#8A3FFC')
      .pointAltitude(0)
      .pointRadius(2.5)
      .pointResolution(24)
    globeFactory(container)
      .pointOfView({ altitude: 1.8, ...coordinates }, 4000)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

$purple-60: #8A3FFC;

.individual-event {
  color: white;
  background-color: black;

  &__main {
    @include framed();
  }
}

.event-header {
  @include framed();
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &__live-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    & div {
      width: 100%;
      height: 100%;
    }
  }

  &__info-layout {
    position: relative;
    pointer-events: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 22rem;
  }

  &__title-layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    @include type-style('productive-heading-07');
    pointer-events: all;
  }

  &__summary {
    pointer-events: all;
  }

  &__slack {
    pointer-events: all;
  }

  &__slack-logo {
    margin-top: $spacing-03;
  }

  &__slack-arrow {
    fill: $purple-60;
    margin-left: $spacing-03;
  }
}

.event-summary {
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__picture {
    flex: 1 0 0;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__info {
    padding: $spacing-05;
    background-color: $purple-60;
    display: flex;
    justify-content: space-between;
  }

  &__info-item {
    flex: 1 0 0;
  }

  &__info-item-label {
    @include type-style('productive-heading-02');
    display: flex;
    align-items: center;
    margin-bottom: $spacing-03;
  }

  &__info-item-icon {
    margin-left: $spacing-03;
  }
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.individual-event__main {
  & h2 {
    @include type-style('productive-heading-07');
    color: white;
    margin-top: $layout-01;
    margin-bottom: $layout-03;
  }

  & h3 {
    @include type-style('productive-heading-05');
    margin-bottom: $layout-02;
  }

  & p {
    @include type-style('body-long-02');
    margin-bottom: $layout-02;
  }

  & ul {
    list-style-type: square;
    padding-left: $spacing-07;
    margin-bottom: $spacing-07;

    & li {
      margin: 0.5rem 0;
    }
  }
}
</style>
