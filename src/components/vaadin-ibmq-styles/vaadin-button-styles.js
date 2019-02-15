/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable camelcase */

import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/polymer/lib/elements/dom-module.js';

// prettier-ignore
const $_documentContainer = html`<dom-module id="ibmq-button" theme-for="vaadin-button">
<template>
  <style>
    :host {
      --ibmq-font-family-base: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;
      --ibmq-primary-color: #3d70b2;
      --ibmq-light-primary-color: #5596e6;
      --ibmq-dark-primary-color: #234066;
      --ibmq-primary-text-color: #ffffff;
    }

    :host {
      display: inline-block;
    }

    :host(::-moz-focus-inner) {
      padding: 0;
      border: 0;
    }

    [part] ::slotted(svg) {
      position: relative;
      vertical-align: middle;
      top: -1px;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      [part] ::slotted(svg) {
        top: 0;
      }
    }

    :host {
      font-family: var(--ibmq-font-family-base);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: 0;
      cursor: pointer;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -ms-flex-align: center;
          align-items: center;
      -ms-flex-pack: center;
          justify-content: center;
      -ms-flex-negative: 0;
          flex-shrink: 0;
      font-size: 0.875rem;
      font-weight: 600;
      height: 2.5rem;
      padding: 0 1rem;
      border-radius: 0;
      text-align: center;
      text-decoration: none;
      transition-property: background-color;
      transition-duration: 250ms;
      transition-timing-function: ease-in;
      white-space: nowrap;
      line-height: 16px;
    }

    :host([focused]),
    :host(:hover) {
      transition-property: background-color, color;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: .5;
    }

    [part] ::slotted(svg) {
      width: 1rem;
      height: 1rem;
      transition-duration: 250ms;
      transition-timing-function: ease-in;
    }

    /*
     * Selector for applying primary button styles.
     */

    :host([theme~="primary"]) {
      background-color: var(--ibmq-button-primary-background-color, var(--ibmq-primary-color));
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      color: var(--ibmq-button-primary-color, var(--ibmq-primary-text-color));
    }

    :host([theme~="primary"][focused]),
    :host([theme~="primary"]:hover) {
      background-color: var(--ibmq-button-primary-focused-background-color, var(--ibmq-light-primary-color));
    }

    :host([theme~="primary"][focused]) {
      border: 2px solid #f5f7fa;
      outline: 2px solid var(--ibmq-button-primary-focused-background-color, var(--ibmq-light-primary-color));
    }

    :host([theme~="primary"][disabled]:hover),
    :host([theme~="primary"][disabled][focused]) {
      background-color: var(--ibmq-button-primary-background-color, var(--ibmq-primary-color));
    }

    :host([theme~="primary"][active]) {
      background-color: var(--ibmq-button-primary-active-background-color, var(--ibmq-dark-primary-color));
    }

    :host([theme~="primary"]) [part] ::slotted(svg) {
      fill: var(--ibmq-button-primary-color, var(--ibmq-primary-text-color));
    }

    /*
     * Selector for applying secondary button styles.
     */

    :host([theme~="secondary"]) {
      background-color: transparent;
      border-width: 2px;
      border-style: solid;
      border-color: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
      color: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"][focused]),
    :host([theme~="secondary"]:hover) {
      background-color: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"][focused]) {
      border: 2px solid #f5f7fa;
      outline: 2px solid var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"][disabled]:hover),
    :host([theme~="secondary"][disabled][focused]) {
      background-color: transparent;
    }

    :host([theme~="secondary"][active]) {
      background-color: transparent;
    }

    :host([theme~="secondary"]) [part] ::slotted(svg) {
      fill: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"]:hover),
    :host([theme~="secondary"][focused]) {
      color: var(--ibmq-button-secondary-focus-color, var(--ibmq-primary-text-color));
    }

    :host([theme~="secondary"][active]) {
      color: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"]:hover) [part] ::slotted(svg),
    :host([theme~="secondary"][focused]) [part] ::slotted(svg) {
      fill: var(--ibmq-button-secondary-focus-color, var(--ibmq-primary-text-color));
    }

    :host([theme~="secondary"]:hover[disabled]),
    :host([theme~="secondary"][focused][disabled]) {
      color: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    :host([theme~="secondary"][active]) [part] ::slotted(svg) {
      fill: var(--ibmq-button-secondary-color, var(--ibmq-primary-color));
    }

    /*
     * Prefix & suffix
     */

    [part="prefix"] {
      margin-left: -0.5em;
      margin-right: 0.5em;
    }

    [part="suffix"] {
      margin-left: 0.5em;
      margin-right: -0.5em;
    }

    /*
     * Small
     */

    :host([theme~="small"]) {
      letter-spacing: 0;
      height: 2rem;
      padding: 0 0.5rem;
    }

    :host([theme~="small"]) [part] ::slotted(svg) {
      width: .8rem;
      height: .8rem;
    }
  </style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
