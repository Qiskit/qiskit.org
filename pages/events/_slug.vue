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
        <aside class="event-summary">
          <div
            class="event-summary__picture"
            :style="`background-image: url(${uri.lBackground})`"
          />
          <dl class="event-summary__info">
            <div class="event-summary__info-item">
              <dt class="event-summary__info-item-label">
                Location <ArrowRight20 class="event-summary__info-item-icon" />
              </dt>
              <dd class="event-summary__infor-item-data">
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
    <main v-html="event.html" />
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
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

$purple-60: #8A3FFC;

.individual-event {
  color: white;
  background-color: black;
}

.event-header {
  @include framed();
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__info-layout {
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

header p {
  margin: 0.8rem;
}

header .headlines {
  margin-top: 60px;
}

.interest {
  margin-top: 2rem;
}

.sign-up {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid white;
  padding: 0.7rem 2rem;
  margin-top: 2rem;
}

.scroll-down {
  margin-top: 2rem;
  position: relative;
  font-style: italic;
}

.icon-scroll {
  width: 30px;
  height: 53px;
  margin: 0 auto;
  box-shadow: inset 0 0 0 3px #fff;
  border-radius: 25px;
}

.icon-scroll:before {
  position: absolute;
}

.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}

@media (max-height: 500px) {
  .headlines {
    font-size: 0.9em;
    margin-top: 4.4rem;
    margin-bottom: -6rem;
  }

  .headlines h1 {
    margin-bottom: 0;
  }
}

@media (max-height: 320px) {
  .headlines {
    font-size: 0.9em;
    margin-top: 6.5rem;
    margin-bottom: -7rem;
  }

  .icon-scroll {
    display: none;
  }
}

</style>

<style>
#event-body a {
  text-decoration: none;
}

#event-body {
  background-color: white;
  background-image: url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'),
    url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg');
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-y, repeat-y, repeat-y;
  background-position: top calc(100vh + 890px) left 0, top calc(100vh + 930px) left 0, top calc(100vh + 970px) left 0,
    top 0 right 100px, top 0 right 0, top 0 right -100px;
  color: black;
}

#event-body h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

#event-body h2 {
  margin: 2rem 0 2.5rem;
  color: #0A1D8F;
}

#event-body main {
  background-color: transparent;
  background-image: none;
}

#event-body main .cta {
  border-color: black;
}

#event-body main > :not(h2):not(iframe):not(table) {
  margin-left: 10%;
  margin-right: 1.5rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  max-width: 30rem;
}

#event-body main ul {
  list-style-type: square;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

#event-body main ul li {
  margin: 0.5rem 0;
}

#event-body main .clarification {
  font-size: 0.7rem;
  line-height: 1rem;
}

#event-body h2 {
  padding-top: 4rem;
  margin: 0 0 2rem;
  color: #0A1D8F;
}

#event-body h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

#event-body .agenda h2 {
  margin-bottom: 0.5rem;
}

#event-body .agenda .location {
  font-weight: bold;
  padding-left: 10%;
  margin-bottom: 3rem;
}

#event-body h3 {
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

#event-body .agenda h3 {
  margin-top: 0;
}

#event-body h3 strong {
  font-weight: bold;
}

#event-body table {
  margin-left: 10%;
}

table tr td.time {
  color: #0A1D8F;
}

#event-body table td {
  text-align: center;
  padding: 1.2rem 1.2rem 1rem 0;
  border-bottom: 1px dotted #0A1D8F;
}

#event-body table tr td:first-child {
  text-align: left;
}

#event-body td.multislot {
  vertical-align: top;
}

#event-body .session {
  margin-bottom: 1rem;
}

#event-body .author {
  font-style: italic;
}
</style>
