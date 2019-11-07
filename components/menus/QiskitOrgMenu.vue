<template>
  <section>
    <div class="menu-container">
      <div class="menu menu--framed">
        <section class="drawer" tabindex="-1">
          <svg class="drawer-toggle" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
          <div class="overlay" />
          <nav class="vertical-navigation">
            <h2>Elements</h2>
            <a class="vertical-navigation__item" href="https://qiskit.org/terra">Terra</a>
            <a class="vertical-navigation__item" href="https://qiskit.org/aer">Aer</a>
            <a class="vertical-navigation__item" href="https://qiskit.org/aqua">Aqua</a>
            <a class="vertical-navigation__item" href="https://qiskit.org/ignis">Ignis</a>
            <a class="vertical-navigation__item" href="https://qiskit.org/ibmqaccount">IBM Q Account</a>
            <h2>Learn more</h2>
            <a class="vertical-navigation__item vertical-navigation__item--active" href="/">Community</a>
            <div class="vertical-community-navigation">
              <nuxt-link
                v-for="(link, index) in links"
                :key="index"
                :class="{
                  'vertical-community-navigation__item': true,
                  'nuxt-link-active': isActive(link.to)
                }"
                :to="link.to"
              >
                {{ link.label }}
              </nuxt-link>
            </div>
            <a class="vertical-navigation__item" href="https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb" target="_blank">Tutorials</a>
            <a class="vertical-navigation__item" href="https://qiskit.org/documentation">API&nbsp;Documentation</a>
          </nav>
        </section>
        <a class="link-to-home" href="https://qiskit.org">Qiskit</a>
        <nav class="navigation-group navigation-group--with-separator">
          <a class="navigation-group__item" href="https://qiskit.org/terra">Terra</a>
          <a class="navigation-group__item" href="https://qiskit.org/aer">Aer</a>
          <a class="navigation-group__item" href="https://qiskit.org/aqua">Aqua</a>
          <a class="navigation-group__item" href="https://qiskit.org/ignis">Ignis</a>
          <a class="navigation-group__item" href="https://qiskit.org/ibmqaccount">IBM Q Account</a>
        </nav>
        <nav class="navigation-group navigation-group--fixed navigation-group--right-aligned">
          <a class="navigation-group__item navigation-group__item--active" href="/">Community</a>
          <a class="navigation-group__item" href="https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb" target="_blank">Tutorials</a>
          <a class="navigation-group__item" href="https://qiskit.org/documentation">API&nbsp;Documentation</a>
        </nav>
      </div>
    </div>
    <div class="community-menu menu-container menu-container--light">
      <section class="menu menu--framed">
        <nav class="navigation-group navigation-group--right-aligned navigation-group--fixed">
          <nuxt-link
            v-for="(link, index) in links"
            :key="index"
            :class="{
              'navigation-group__item': true,
              'nuxt-link-active': isActive(link.to)
            }"
            :to="link.to"
          >
            {{ link.label }}
          </nuxt-link>
        </nav>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({
    type: Array,
    default: () => [
      { to: '/education', label: 'Education' },
      { to: '/advocates', label: 'Advocates' },
      { to: '/experiments', label: 'Experiments' }
    ]
  }) links

  isActive(path) {
    return this.$route.path.startsWith(path)
  }
}
</script>

<style lang="scss" scoped>
@mixin vertical-navigation-item() {
  font-size: 0.9rem;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1.5em;
}

* {
  box-sizing: border-box;
}

.menu-container {
  font-size: 16px;
  font-weight: 400;
  border-bottom: 1px solid black;
  background-color: #21252b;

  --link-color: white;

  &--light {
    --link-color: var(--body-color-dark);
    background-color: var(--secondary-color-lightmost);
    border-bottom: none;
  }
}

.menu {
  height: 60px;
  display: flex;
  font-size: 0.80rem;

  & > * {
    height: 100%;
  }

  &--framed {
    @include framed();
  }
}

.navigation-group {
  display: flex;

  &__item {
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    color: var(--link-color);
    text-decoration: none;

    &.nuxt-link-active {
      font-weight: bold;
      position: relative;
      top: 1px;
      border-bottom: 4px solid var(--secondary-color);
    }

    &--active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid var(--secondary-color);
    }
  }

  &--with-separator::before {
    content: "";
    background-color: #fff4;
    width: 2px;
    margin: 12px 10px;
  }

  &--right-aligned {
    margin-left: auto;
  }

  &--fixed {
    /* fixings for mimicing qiskit.org menu */
    margin-right: -0.4rem;
  }

  @include mq($until: wide-desktop) {
    display: none;
  }
}

.link-to-home {
  display: inline-flex;
  align-items: center;
  margin-left: -1.2rem;
  padding: 0 1em;
  color: var(--link-color);
  text-decoration: none;

  @include mq($until: wide-desktop) {
    font-size: 1.1rem;
    margin-left: -0.5rem;
  }
}

.drawer {
  display: none;

  @include mq($until: wide-desktop) {
    display: unset;
    margin-left: -2rem;
  }
}

.community-menu {
  @include mq($until: wide-desktop) {
    display: none;
  }
}

.drawer-toggle {
  fill: white;
  height: 100%;
  cursor: pointer;
  margin: 0 0 0 1.5rem;
}

.overlay {
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 150;
  background-color: black;
  opacity: 0;
  transition: opacity 200ms;
  pointer-events: none;
}

.vertical-navigation {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0; bottom: 0; left: 0;
  z-index: 200;
  width: 256px;
  padding: 1.3rem;
  background-color: var(--primary-color);
  transform: translateX(-100%);
  transition: transform 200ms;
  overflow-y: auto;

  h2 {
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--primary-color-lightmost);
    padding: 1em;
  }

  &__item {
    @include vertical-navigation-item();
  }
}

.vertical-community-navigation {
  display: flex;
  flex-direction: column;
  margin: 0 -1.3rem;
  padding: 1rem 0;
  background-color: var(--secondary-color-lightmost);

  &__item {
    @include vertical-navigation-item();
    padding: 0.5rem 3rem;
    color: var(--body-color-dark);

    &.nuxt-link-active {
      font-weight: bold;
      border-left: 4px solid var(--secondary-color);
      padding-left: calc(3rem - 4px);
    }
  }
}

.drawer:focus {
  .vertical-navigation {
    transform: translateX(0);
  }

  .overlay {
    opacity: 0.5;
  }
}
</style>
