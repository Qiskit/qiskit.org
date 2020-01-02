<p align="center">
  <a href="https://qiskit.org/">
    <img alt="Qiskit" src="https://qiskit.org/images/qiskit-logo.svg" width="70" />
  </a>
</p>
<h1 align="center">
  Qiskit's website
</h1>

<h3 align="center">
  ⚛️  🚀
</h3>
<h3 align="center">
  Welcome to Quantum
</h3>
<p align="center">
  Qiskit is an open-source quantum computing software development framework for leveraging today's quantum processors in research, education, and business.
</p>
<p align="center">
  <a href="https://github.com/Qiskit/qiskit.org/blob/master/LICENSE.txt">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Qiskit.org is released under the Apache 2.0 License." />
  </a>
  <a href="https://travis-ci.com/Qiskit/qiskit.org">
    <img src="https://travis-ci.com/Qiskit/qiskit.org.svg?branch=master" alt="Current CircleCI build status." />
  </a>
  <a href="https://github.com/Qiskit/qiskit.org/blob/master/CONTRIBUTING.rst">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=qiskit">
    <img src="https://img.shields.io/twitter/follow/qiskit.svg?label=Follow%20@qiskit" alt="Follow @qiskit" />
  </a>
</p>

<h3 align="center">
  <a href="https://qiskit.org/">Home page</a>
  <span> · </span>
  <a href="https://qiskit.org/education/">Education</a>
  <span> · </span>
  <a href="https://qiskit.org/documentation/">Documentation</a>
  <span> · </span>
  <a href="https://qiskit.org/experiments/">Experiments</a>
  <span> · </span>
  <a href="https://qiskit.org/advocates/">Advocates</a>
  <span> · </span>
  Support: <a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM">Slack</a>
</h3>

## What’s In This Document

- [Live](#-live)
- [The Technology Behind](#-get-up-and-running)
- [Get Up and Running](#-whats-inside?)
- [What's Inside](#-migration-guides)
- [How to Contribute](#-how-to-contribute)
- [Other Important Commands](#memo-license)
- [Roadmap](#memo-license)

## ⚡️ Live
[Check it live](https://qiskit.org/)

## The technology behind

Qiskit.org is a pre-rendering SPA made using [Nuxt.js](https://nuxtjs.org/).

A **pre-rendering SPA** is a single page application that generates a static markup (HTML) at build time. The user, when entering the web, receives HTML (as if it were a static web) but in the meantime, JS files belonging to the SPA are loaded “hydrating” the web until it's completely dynamic.

**[Nuxt.js](https://nuxtjs.org/)** is the biggest framework on top of **[Vue.js](https://vuejs.org/)** to generate *universal* SPAs. Universal or "isomorphic" apps can be pre-rendering or SSR. Since so far we don't need server functions, our website it's just pre-rendering.

With this technology we want to achieve:
- Use a component based framework like Vue that allow us to reuse part of the UI code in different parts of the application.
- Fast initial page load.
- Index content on Google.

## 🚀 Get Up and Running


1. **Download this repository and go to its folder**

  ```shell
   git clone git@github.com:Qiskit/qiskit.org.git && cd qiskit.org
   ```

2. **Install dependencies**

   ```shell
   npm install
   ```

3. **Run a local server with hot reload at [localhost:3000](localhost:3000)**

   ```shell
   npm run dev
   ```

## 🧐 What's inside?

    .
    ├── assets
    ├── components
    ├── constants
    ├── content
    ├── deploy
    ├── hooks
    ├── layouts
    ├── mixins
    ├── pages
    ├── plugins
    ├── static
    ├── store
    ├── tests
    ├── textbook
    ├── nuxt.config.js
    ├── jest.config.js
    ... other third-parties configuration files

2.  **`/assets`**: You will find the images and assets for the project. You can find more information at [Nuxt's assets directory documentation](https://nuxtjs.org/guide/assets/)

3.  **`/components`**: Vue components for the project. You can find more information at [Nuxt's components directory documentation](https://nuxtjs.org/guide/directory-structure#the-components-directory)

4.  **`/contents`**: You will save your MD files here. They are divided by language and you will have to write the URL name of each of them at `blogsEn.js` and `blogsEs.js`.

5.  **`/layouts`**: You can find information at [Nuxt's layout directory documentation](https://nuxtjs.org/guide/directory-structure#the-layouts-directory)

7.  **`/pages`**: You can find information at [Nuxt's pages directory documentation](https://nuxtjs.org/guide/directory-structure#the-pages-directory)

8.  **`/plugins`**: You can find information at [Nuxt's plugins directory documentation](https://nuxtjs.org/guide/directory-structure#the-plugins-directory)

9.  **`/statics`**: You can find information at [Nuxt's statics directory documentation](https://nuxtjs.org/guide/directory-structure#the-static-directory)

12. **`nuxt-config.js`**: This is the main configuration file for a Nuxt site. This is where you can specify information about your site (metadata) like the site title and description, which Nuxt plugins you’d like to include, etc. (Check out the [config docs](https://nuxtjs.org/guide/configuration) for more detail).

## Other important commands to know

Run a local server with the development mode on and debug TypeScript errors
```shell
  npm run dev-debug
```

Run Jest tests:
```shell
  npm run test
```
Build static version, output will be at a new folder called `dist`.
```shell
  npm run build
```

Run the linter checker to find possible typos in the code. We use [ESLint](https://eslint.org/)
```shell
  npm run lint
```
Run the linter autofixer. 
```shell
  npm run fix-lint
```
