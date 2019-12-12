<template>
  <section>
    <div class="textbook-features">
      <div
        class="marker marker--active"
        data-to="toc"
        @click.capture="activate"
      >
        <div class="marker__decoration" aria-hidden="true" />
        <p class="marker__label">
          Table of Contents
        </p>
      </div>
      <section
        id="toc"
        class="textbook-features__page textbook-features__page--active"
      >
        <img class="bookmark" src="/images/education/iconBookmark.svg">
        <div class="textbook-features__toc-content">
          <slot />
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  activate (evt: PointerEvent) {
    const thismarker = evt.currentTarget && evt.currentTarget as HTMLElement
    if (!thismarker || thismarker.classList.contains('marker--active')) {
      return
    }

    // Change marker enabled
    const previouslyEnabled = document.querySelector('.marker--active')
    if (previouslyEnabled) {
      previouslyEnabled.classList.remove('marker--active')
    }
    thismarker.classList.add('marker--active')

    // Dismiss the current active section
    const self = this
    function clearOut (evt: Event) {
      if (evt.currentTarget) {
        evt.currentTarget.removeEventListener('transitionend', clearOut)
        self.clearIsOut(evt.currentTarget as HTMLElement)
      }
    }
    const activeSection = document.querySelector('.textbook-features__page--active')
    if (activeSection) {
      activeSection.addEventListener('transitionend', clearOut)
      activeSection.classList.add('textbook-features__page--out')
      activeSection.classList.remove('textbook-features__page--active')
    }

    // Activate the new one
    const newSection = document.querySelector(`#${thismarker.dataset.to}`)
    if (newSection) {
      newSection.classList.add('textbook-features__page--active')
    }
  }

  clearIsOut (target: HTMLElement) {
    target.classList.remove('textbook-features__page--out')
  }
}
</script>

<style lang="scss" scoped>
.textbook-features {
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1rem;
    z-index: 1;
    width: 100%;
    height: 100px;
    box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
    border-radius: 8px;
    transform-origin: center bottom;
    transform: scale(0.95);
  }
}

.textbook-features__page {
  position: relative;
  width: 100%;
  opacity: 0;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  transform-origin: center bottom;
  transform: scale(0.95) translateY(1rem);
  transition: transform 300ms, opacity 300ms;

  &--active {
    opacity: 1;
    z-index: 2;
    transform: scale(1);
    box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
  }

  &--out {
    opacity: 0;
    z-index: 2;
    transform: scale(1.3) translateY(-2rem);
    transition: transform 400ms, opacity 400ms;
  }
}

.bookmark {
  position: absolute;
  top: -16px;
  left: 1rem;
  z-index: 3;
  width: 3.8rem;
  height: auto;
}

.marker {
  position: absolute;
  top: 5rem;
  left: calc(100% - 2.8rem);
  transition: transform 200ms;
  cursor: pointer;

  &:nth-child(2) {
    bottom: 9rem;
    left: calc(100% - 2.8rem);
  }

  &--active,
  &:hover {
    transform: translateX(1rem);
  }

  &--active {
    .marker__decoration {
      opacity: 1;
    }
  }
}

.marker__label {
  margin: 0;
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  writing-mode: vertical-rl;
  height: 100%;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  transform: rotate(180deg);
}

.marker__decoration {
  height: 4rem;
  width: 5rem;
  border-radius: 5px;
  background-color: var(--secondary-color);
  opacity: 0.5;
  transform: skewX(-15deg);
}

#live-code,
#live-code * {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>

<style lang="scss">
.textbook-features__toc-content {
  z-index: 1;
  max-height: 100%;
  overflow-y: auto;
  padding-left: 3.5rem;
  font-size: 0.8rem;

  ul {
    margin: 0.5rem 0 0 2rem;
  }

  h2 {
    font-size: 1.1rem;
  }

  h3 {
    margin: 1rem 0 0 0;
    color: var(--secondary-color);
  }
}
</style>
