/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import '@vaadin/vaadin-button/src/vaadin-button.js';

const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="ibmq-button" theme-for="vaadin-button">
<template>
  <style>
    :host {
      --ibmq-font-family-base: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
      --primary-color: #3d70b2;
      --light-primary-color: #5596e6;
      --dark-primary-color: #234066;
      --error-color: #e71d32;
      --disabled-text-color: #8c9ba5;
    }

    :host {
      display: inline-block;

      --ibmq-button-focus-border-color: #f5f7fa;
      --ibmq-button-focus-color: #ffffff;
    }

    :host {
      display: inline-block;
    }

    :host(::-moz-focus-inner) {
      padding: 0;
      border: 0;
    }

    :host {
      font-family: var(--ibmq-font-family-base);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: .5px;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      font-size: 0.875rem;
      font-weight: 700;
      height: var(--ibmq-button-height, 2.5rem);
      padding: 0 1rem;
      border-radius: 0;
      text-align: center;
      text-decoration: none;
      transition-duration: 250ms;
      transition-timing-function: ease-in;
      white-space: nowrap;
      line-height: 16px;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: .5;
    }

    /*
     * Selector for applying primary button styles.
     */

    :host([theme~="primary"]) {
      background-color: var(--ibmq-button-primary-background-color, var(--primary-color));
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      color: var(--ibmq-button-primary-color, var(--ibmq-button-focus-color));
    }

    :host([theme~="primary"][focused]),
    :host([theme~="primary"]:hover) {
      background-color: var(--ibmq-button-primary-focus-background-color, var(--light-primary-color));
    }

    :host([theme~="primary"][focused]) {
      border: 2px solid var(--ibmq-button-primary-focus-border-color, var(--ibmq-button-focus-border-color));
      outline: 2px solid var(--ibmq-button-primary-focus-background-color, var(--light-primary-color));
    }

    :host([theme~="primary"][disabled][focused]),
    :host([theme~="primary"][disabled]:hover) {
      background-color: var(--ibmq-button-primary-background-color, var(--primary-color));
    }

    :host([theme~="primary"][active]) {
      background-color: var(--ibmq-button-primary-active-background-color, var(--dark-primary-color));
    }

    /*
     * Selector for applying secondary button styles.
     */

    :host([theme~="secondary"]) {
      background-color: transparent;
      border-width: 2px;
      border-style: solid;
      border-color: var(--ibmq-button-secondary-color, var(--primary-color));
      color: var(--ibmq-button-secondary-color, var(--primary-color));
    }

    :host([theme~="secondary"][focused]),
    :host([theme~="secondary"]:hover) {
      background-color: var(--ibmq-button-secondary-color, var(--primary-color));
      color: var(--ibmq-button-secondary-focus-color, var(--ibmq-button-focus-color));
    }

    :host([theme~="secondary"][focused]) {
      border: 2px solid var(--ibmq-button-secondary-focus-border-color, var(--ibmq-button-focus-border-color));
      outline: 2px solid var(--ibmq-button-secondary-color, var(--primary-color));
    }

    :host([theme~="secondary"][disabled][focused]),
    :host([theme~="secondary"][disabled]:hover) {
      background-color: transparent;
      color: var(--ibmq-button-secondary-color, var(--primary-color));
    }

    :host([theme~="secondary"][active]) {
      background-color: transparent;
      color: var(--ibmq-button-secondary-color, var(--primary-color));
    }

    /*
     * Selector for applying ghost button styles.
     */

    :host([theme~="ghost"]) {
      background-color: transparent;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      color: var(--ibmq-button-ghost-color, var(--primary-color));
    }

    :host([theme~="ghost"][focused]),
    :host([theme~="ghost"]:hover) {
      background-color: var(--ibmq-button-ghost-color, var(--primary-color));
      color: var(--ibmq-button-ghost-focus-color, var(--ibmq-button-focus-color));
    }

    :host([theme~="ghost"][focused]) {
      border: 2px solid var(--ibmq-button-ghost-focus-border-color, var(--ibmq-button-focus-border-color));
      outline: 2px solid var(--ibmq-button-ghost-color, var(--primary-color));
    }

    :host([theme~="ghost"][disabled][focused]),
    :host([theme~="ghost"][disabled]:hover) {
      background-color: transparent;
      color: var(--ibmq-button-ghost-color, var(--primary-color));
    }

    :host([theme~="ghost"][active]) {
      background-color: transparent;
    }
  </style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer);
