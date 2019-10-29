<template>
  <section class="experiment-deck">
    <ul class="experiment-deck__switches">
      <li
        class="experiment-deck__left-switch"
        @click="previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18">
          <path fill="#999" d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path fill="#999" d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
      </li>
      <li
        class="experiment-deck__right-switch"
        @click="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18" transform="rotate(180)">
          <path fill="#999" d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path fill="#999" d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
      </li>
    </ul>
    <transition
      v-for="(experiment, index) in experiments"
      :key="`deck-experiment-${index}`"
      name="experiment-deck__slide"
    >
      <nuxt-link
        v-if="active == index"
        class="experiment-deck__slide slide-link"
        :to="experiment.to"
      >
        <div
          class="experiment-deck__slide-picture"
          :style="`background-image: url(${experiment.image});`"
        />
        <div class="experiment-deck__slide-copy">
          <h3>
            {{ experiment.title }}
          </h3>
          <p class="experiment-deck__slide-author">
            {{ experiment.author }}
          </p>
          <p class="experiment-deck__slide-summary">
            {{ experiment.description }}
          </p>
        </div>
      </nuxt-link>
    </transition>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Array) experiments

  active: number = 0

  previous() {
    const count = this.experiments.length
    this.active = this.active === 0 ? count - 1 : this.active - 1
  }

  next() {
    const count = this.experiments.length
    this.active = this.active === count - 1 ? 0 : this.active + 1
  }
}
</script>

<style lang="scss" scoped>
.slide-link {
  display: block;
  text-decoration: none;
  color: unset;
  height: 100%;
}

.experiment-deck {
  position: relative;
  height: 350px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -1rem;
    z-index: 1;
    width: 100%;
    height: 100px;
    background-color: var(--primary-color);
    box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
    transform-origin: center bottom;
    transform: scale(0.95);
  }
}

.experiment-deck__slide {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  font-size: 0.9rem;
  color: var(--body-color-light);
  background-color: var(--primary-color);
  box-shadow: 0 23px 35px 0 rgba(10, 0, 50, 0.35);
  transform-origin: center bottom;

  &-picture {
    flex: 2;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &-copy {
    flex: 1;
    margin: 0.5rem 1rem 1em;
  }

  h3 {
    margin-top: 1.5rem;
  }

  &-author {
    color: var(--secondary-color-lightmost);
    margin-top: 0.5rem;

    &:before {
      content: "by ";
      color: var(--primary-color-lightmost);
    }
  }
}

.experiment-deck__switches {
  position: absolute;
  right: 0; bottom: -4rem; left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.experiment-deck__left-switch,
.experiment-deck__right-switch {
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  & svg {
    height: 2rem;
  }

  &:hover path {
    fill: var(--secondary-color-lightmost);
  }
}

@media (max-width: 600px) {
  .experiment-deck__slide {
    flex-direction: column;
  }
}

/* Transition styles */
.experiment-deck__slide-enter-active {
  transition: transform .8s;
}

.experiment-deck__slide-leave-active {
  transition: transform .8s, opacity .4s .3s;
}

.experiment-deck__slide-enter {
  z-index: 1;
  transform: scale(0.95) translateY(1rem);
}

.experiment-deck__slide-enter-to {
  z-index: 1;
  transform: scale(1) translateY(0);
}

.experiment-deck__slide-leave-to {
  opacity: 0;
  transform: scale(1.3) translateY(-2rem);
}
</style>
