<template>
  <nav>
    <section class="ibm-research">
      <AppLink
        class="text-logo"
        url="/"
      >
        <img class="logo" alt="Qiskit logo" src="https://qiskit.camp/img/qiskit-logo.png">&nbsp;Qiskit
      </AppLink>
    </section>
    <div class="convertible-menu">
      <input class="hamburger" type="checkbox">
      <span class="hamburger" />
      <span class="hamburger" />
      <span class="hamburger" />
      <ul>
        <slot />
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class EventMenu extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  width: 1.7rem;
  margin-top: -0.2rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.ibm-research {
  position: fixed;
  left: 5%;
  z-index: 101;
}

.ibm-research a {
  margin: 0;
  padding-top: 0.2rem;
  display: inline-block;
  border-top: 4px solid $inverse-01;
  font-size: 1.7rem;
  color: $inverse-01;
}

nav {
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: 0px 0px 16px rgba($gray-100, 0.3);
  background-color: $inverse-02;
  flex-wrap: wrap;
  min-height: 63px;
}

nav ul:empty {
  display: none;
}

nav ul {
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  list-style: none;
  flex-wrap: wrap;
}

nav li {
  font-weight: bold;
  list-style: none;
  text-indent: 0;
  margin: 0 0.8rem;
  height: 100%;
  line-height: 3.5rem;
  cursor: pointer;
}

nav li:hover a {
  opacity: 0.6;
  border-bottom: 2px solid $ibm-blue;
}

nav li.active a,
nav li.active:hover a {
  opacity: 0.6;
  border: none;
}

nav li a {
  color: $inverse-01;
}

.convertible-menu {
  display: block;
  position: relative;
  align-self: center;
  width: 100%;
  z-index: 1;
}

.convertible-menu .hamburger {
  display: none;
  margin-left: calc(100% - 40px - 1rem);
}

.convertible-menu input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

.convertible-menu span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  background-color: $inverse-01;
  transform-origin: 4px 0;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.convertible-menu input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg)
             translate(0, -1px);
  background: $inverse-01;
}

.convertible-menu input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.convertible-menu input:checked ~ span:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg)
             translate(-1px, -2px);
  background: $inverse-01;
}

@media (max-width: 800px) {

  .convertible-menu .hamburger {
    display: block;
  }

  .convertible-menu ul {
    text-align: right;
    width: 100vw;
    position: absolute;
    background-color: $inverse-02;
    display: block;
    height: auto;
    border-bottom: 1px solid $ibm-blue;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transform: translateX(100%);
  }

  .convertible-menu input:checked ~ ul {
    transform: translateX(0);
  }

  .convertible-menu ul li {
    padding-right: 2.5%;
  }

  .id-stub {
    top: -380px;
  }
}
</style>
