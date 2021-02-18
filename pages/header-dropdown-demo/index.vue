<template>
  <div class="mega-dropdown">
    <button class="mega-dropdown__button" @click="isOpen">
      browse content
      <svg class="mega-dropdown__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs /><path d="M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z" /><path fill="none" d="M0 0h32v32H0z" /></svg>
    </button>
    <section
      class="mega-dropdown__content"
      :class="{ 'mega-dropdown__content_active': showContent }"
    >
      <div class="mega-dropdown__column">
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Prerequisites
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Setting Up Your Environment
            </li>
            <li class="mega-dropdown__menu-list-item">
              Python and Jupyter Notebooks
            </li>
          </ul>
        </div>
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Quantum states and qubits
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Introduction
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Atoms of Computation
            </li>
            <li class="mega-dropdown__menu-list-item">
              Representing Qubit States
            </li>
            <li class="mega-dropdown__menu-list-item">
              Single Qubit Gates
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Case for Quantum
            </li>
          </ul>
        </div>
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Multiple qubits and entanglement
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Introduction
            </li>
            <li class="mega-dropdown__menu-list-item">
              Multiple Qubits and Entangled States
            </li>
            <li class="mega-dropdown__menu-list-item">
              More Circuit Identities
            </li>
            <li class="mega-dropdown__menu-list-item">
              Proving Universality
            </li>
            <li class="mega-dropdown__menu-list-item">
              Classical Computation on a Quantum Computer
            </li>
          </ul>
        </div>
      </div>
      <div class="mega-dropdown__column">
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Quantum Protocols and Quantum Algorithms
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Defining Quantum Circuits
            </li>
            <li class="mega-dropdown__menu-list-item">
              Deutsch-Jozsa Algorithm
            </li>
          </ul>
        </div>
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Quantum states and qubits
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Introduction
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Atoms of Computation
            </li>
            <li class="mega-dropdown__menu-list-item">
              Representing Qubit States
            </li>
            <li class="mega-dropdown__menu-list-item">
              Single Qubit Gates
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Case for Quantum
            </li>
          </ul>
        </div>
      </div>
      <div class="mega-dropdown__column">
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Prerequisites
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Setting Up Your Environment
            </li>
            <li class="mega-dropdown__menu-list-item">
              Python and Jupyter Notebooks
            </li>
          </ul>
        </div>
        <div class="mega-dropdown__menu">
          <h4 class="copy__subtitle">
            Quantum states and qubits
          </h4>
          <ul class="mega-dropdown__menu-list">
            <li class="mega-dropdown__menu-list-item">
              Introduction
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Atoms of Computation
            </li>
            <li class="mega-dropdown__menu-list-item">
              Representing Qubit States
            </li>
            <li class="mega-dropdown__menu-list-item">
              Single Qubit Gates
            </li>
            <li class="mega-dropdown__menu-list-item">
              The Case for Quantum
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class HeaderDropDown extends Vue {
  showContent = false;

  isOpen () : void {
    this.showContent = !this.showContent
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.mega-dropdown {
  @include contained();
  @include type-style('body-short-01');
  color: $cool-gray-80;
  position: relative;

  &__button {
    background-color: $white;
    outline: none;
    border: none;
    border-bottom: 1px solid $cool-gray-80;
    padding-right: 0;
    padding-left: 0;
    width: 12rem;
    display: flex;
    justify-content: space-between;
    padding: $spacing-03 $spacing-01;
  }

  &__icon {
    width: 1rem;
  }

  &__content {
    display: none;
    position: absolute;
    top: 2.2rem;
    padding: 2rem 1rem;
    min-width: 32rem;
    background-color: $white;
    box-shadow: -4px 4px 4px rgba(0, 0, 0,.25);
    height: 32rem;
    overflow: scroll;

    &_active {
      display: flex;

      @include mq($until: medium) {
        flex-direction: column;
      }
    }

    @include mq($until: large) {
      left: 0;
      right: 0;
      padding: 2rem;
      height: initial;
    }
  }

  &__column {
    padding-right: $spacing-05;
    max-width: 15rem;

    @include mq($until: medium) {
      max-width: initial;
      width: 100%;
    }
  }

  &__menu {
    margin-bottom: $spacing-05;

    &-list-item {
      padding-bottom: $spacing-03;
    }
  }
}
</style>
