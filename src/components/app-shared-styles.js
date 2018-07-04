/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { html } from '@polymer/lit-element';

export const SharedStyles = html`<style>
  a {
    color: var(--app-light-primary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .limited-width {
    display: flex;
    flex-direction: inherit;
    flex-grow: 1;
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-left: 1em;
    padding-right: 1em;
  }

  @media (min-width: 768px) {
    .limited-width {
      padding-left: 2em;
      padding-right: 2em;
    }
  }
</style>`;

export const HeaderStyles = html`<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2em 1.2em;
    background-color: var(--app-header-background-color, #292C35);
    color: #FFFFFF;
  }

  header > img {
    width: 128px;
    height: 128px;
    margin-bottom: 1.6em;
  }

  header > div {
    flex-grow: 1;
    max-width: 590px;
  }

  header h1 {
    font-size: 2.6em;
    font-weight: 600;
    margin: 0;
  }

  header h2 {
    font-size: 1.5em;
    font-weight: 300;
    margin: .5em 0 0;
  }

  header p {
    line-height: 1.6em;
  }

  header .badges {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  header .badges > * + * {
    margin-left: .5em;
  }

  header .badges vaadin-button {
    --ibmq-button-secondary-color: #FFFFFF;
    --ibmq-button-secondary-focus-color: #292C35;
  }

  header .badges vaadin-button svg {
    margin-right: .2em;
  }

  @media (min-width: 768px) {
    header {
      flex-direction: row;
      justify-content: center;
      text-align: left;
      padding-top: 0;
      padding-bottom: 0;
      min-height: 340px;
    }

    header > img {
      width: 200px;
      height: 200px;
      margin-bottom: 0;
      margin-right: 3em;
    }
  }
</style>`;

export const SectionStyles = html`<style>
  section {
    flex-direction: column;
  }

  section.colored {
    background-color: var(--app-section-background-color, var(--app-primary-color));
    color: var(--app-section-color, #FFFFFF);
  }

  section .limited-width {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  section h3 {
    margin: 0 0 1em;
    font-size: 1.7em;
    font-weight: 400;
  }

  section .description {
    line-height: 1.9em;
  }

  section .description p:first-child {
    margin-top: 0;
  }

  section .description p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    section .limited-width {
      padding-top: 3em;
      padding-bottom: 3em;
    }
  }
</style>`;
