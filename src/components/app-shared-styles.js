/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { html } from '@polymer/lit-element';

export const SharedStyles = html`
  <style>
    a {
      color: var(--app-primary-color);
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
  </style>
`;

export const HeaderStyles = html`
  <style>
    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2em 1.2em;
      background-color: var(
        --app-header-background-color,
        var(--app-secondary-color)
      );
      color: #ffffff;
    }

    header > img {
      width: 128px;
      height: 128px;
      margin-bottom: 1.6em;
    }

    header > div {
      flex-grow: 1;
      max-width: 670px;
    }

    header h1 {
      font-size: 2.6em;
      font-weight: 600;
      margin: 0;
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
    }

    header h2 {
      font-size: 1.5em;
      font-weight: 300;
      margin: 1.1em 0;
    }

    header p {
      line-height: 1.6em;
    }

    header .badges {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: -0.8em;
    }

    header .badges > * {
      margin: 0.8em;
    }

    header .badges > a {
      display: inline-flex;
      text-decoration: none;
    }

    header .badges vaadin-button {
      --ibmq-button-secondary-color: #ffffff;
      --ibmq-button-secondary-focus-color: #292c35;
    }

    header .badges vaadin-button svg {
      margin-right: 0.2em;
    }

    @media (min-width: 768px) {
      header {
        flex-direction: row;
        justify-content: center;
        text-align: left;
        padding-top: 0;
        padding-bottom: 0;
        min-height: 400px;
      }

      header > img {
        width: 200px;
        height: 200px;
        margin-bottom: 0;
        margin-right: 3em;
      }

      header .badges {
        justify-content: flex-start;
      }
    }

    @media (min-width: 1024px) {
      header {
        min-height: 340px;
      }
    }
  </style>
`;

export const SectionStyles = html`
  <style>
    section {
      flex-direction: column;
    }

    section.colored {
      background-color: var(
        --app-section-background-color,
        var(--app-primary-color)
      );
      color: var(--app-section-color, #ffffff);
    }

    section .limited-width {
      padding-top: 2em;
      padding-bottom: 2em;
    }

    section h3 {
      margin: 0 0 1em;
      font-size: 1.7em;
      font-weight: 400;
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono', Courier, monospace;
    }

    section h3 ~ h3 {
      margin-top: 1em;
    }

    section .description {
      line-height: 1.9em;
    }

    section .description img {
      max-width: 100%;
    }

    section .description p:first-child {
      margin-top: 0;
    }

    section .description p:last-child {
      margin-bottom: 0;
    }

    section .row .column {
      flex: 1;
    }

    section .row .description {
      margin-bottom: 2em;
      font-size: 1.1em;
    }

    section .row .description .actions {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      margin: -0.8em;
    }

    section .row .description .actions a {
      display: inline-flex;
      text-decoration: none;
      margin: 0.8em;
    }

    section .row .illustration {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    section .row .illustration img,
    section .row .illustration video {
      display: block;
      max-width: 100%;
    }

    section .row .description .actions vaadin-button {
      --ibmq-button-secondary-color: var(--app-primary-color);
      --ibmq-button-secondary-focus-color: #ffffff;
    }

    section.colored .row .description .actions vaadin-button {
      --ibmq-button-secondary-color: #ffffff;
      --ibmq-button-secondary-focus-color: var(--app-primary-color);
    }

    @media (min-width: 768px) {
      section .limited-width {
        padding-top: 3em;
        padding-bottom: 3em;
      }

      section .row {
        flex-direction: row;
      }

      section .row.reverse {
        flex-direction: row-reverse;
      }

      section .row .description {
        margin-bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 3;
        margin-right: 3em;
      }

      section .row.reverse .description {
        margin-right: 0;
        margin-left: 3em;
      }

      section .row .illustration {
        align-items: flex-start;
        justify-content: center;
        flex: 2;
      }
    }
  </style>
`;

export const SectionElementStyles = html`
  <style>
    section .row .illustration {
      align-items: initial;
    }

    .note {
      font-size: 0.9em;
    }

    code-sample[type='bash'] {
      margin-bottom: 2em;
    }

    @media (min-width: 768px) {
      section .row .description,
      section .row .illustration {
        justify-content: flex-start;
      }

      section .row .description {
        flex: 2;
      }

      section .row .illustration {
        flex: 3;
        min-width: 0;
      }
    }
  </style>
`;

export const StackListStyles = html`
  <style>
    .stack-list {
      display: flex;
      flex-direction: column;
      padding-left: 1.136em;
      position: relative;
    }

    .stack-list::before {
      content: '';
      display: inline-block;
      width: 2px;
      background-color: currentColor;
      position: absolute;
      top: 0.3em;
      left: 0;
      bottom: 1.6em;
    }

    .stack-list .stack-list {
      margin-top: 1.136em;
    }

    .stack-list > * + * {
      margin-top: 1.136em;
    }

    .stack-list .element {
      line-height: 1.3em;
      position: relative;
    }

    .stack-list .element::before,
    .stack-list .group::before {
      content: '';
      display: inline-block;
      width: 0.341em;
      height: 0.682em;
      background-color: currentColor;
      position: absolute;
      top: 0.3em;
      left: -1.15em;
    }

    .stack-list .element .title {
      font-weight: 500;
    }

    .stack-list .element .subtitle {
      font-weight: 300;
      font-size: 0.8em;
    }

    .stack-list .group {
      display: flex;
      flex-direction: row;
      position: relative;
    }

    .stack-list .group > .element::before {
      content: '';
      display: none;
    }

    .stack-list .group .separator {
      margin: 0 0.5em;
    }
  </style>
`;
