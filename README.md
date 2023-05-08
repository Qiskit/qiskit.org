<p align="center">
  <a href="https://qiskit.org/">
    <img alt="Qiskit" src="https://qiskit.org/images/qiskit-logo.png" width="70" />
  </a>
</p>

<h1 align="center">
  Welcome to <a href="https://qiskit.org">Qiskit.org</a>
</h1>
<p align="center">
Qiskit is an open-source quantum computing software development framework for leveraging today's quantum processors in research, education, and business.
</p>
<p align="center">
  <a href="https://github.com/Qiskit/qiskit.org/blob/main/LICENSE.txt">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Qiskit.org is released under the Apache 2.0 License." />
  </a>
  <a href="https://github.com/Qiskit/qiskit.org/actions">
    <img src="https://github.com/Qiskit/qiskit.org/workflows/build%20and%20deploy/badge.svg?branch=main" alt="Current GitHub Action build status." />
  </a>
  <a href="https://github.com/Qiskit/qiskit.org/blob/main/CONTRIBUTING.rst">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=qiskit">
    <img src="https://img.shields.io/twitter/follow/qiskit.svg?label=Follow%20@qiskit" alt="Follow @qiskit" />
  </a>
</p>

<h3 align="center">
  <a href="https://qiskit.org/">Home page</a>
  <span> · </span>
  <a href="https://qiskit.org/learn/">Learn</a>
  <span> · </span>
  <a href="https://qiskit.org/events/">Events</a>  
  <span> · </span>
  <a href="https://qiskit.org/advocates/">Advocates</a>
  <span> · </span>
  <a href="https://qiskit.org/ecosystem/">Ecosystem</a>
  <span> · </span>
  <a href="https://qiskit.org/documentation/">Documentation</a>
  <span> · </span>
  <a href="https://qiskit.org/providers/">Providers</a>
</h3>

<br/>

## Table of Contents

- [🚀 Get Up and Running](#-get-up-and-running)
- [💻 Technology Used](#-technology-used)
- [🏭 Content Generation](#-content-generation)
- [✏️ How to Contribute](#️-how-to-contribute)
- [🗓 Open Backlog](#-open-backlog)
- [👩‍💻 Maintainers](#-maintainers)
- [🔗 Connect with Qiskit](#-connect-with-qiskit)

<br/>

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

<br/>

## 💻 Technology Used

Qiskit.org is a static website generated using [Nuxt](https://nuxt.com/).

We create and run tests using [Vitest](https://vitest.dev/), avoid syntax errors using [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/), and automate code integration and deployment using [GitHub Actions](https://github.com/features/actions).

<br/>

## 🏭 Content Generation

Qiskit.org integrates with the tools used by the IBM Quantum Community Team to generate content based on 3rd party APIs such as Airtable. Part of this content is prefetched during building time. While developing, it is disabled by default. If you want enable content generation, you must set the environment variable `GENERATE_CONTENT`. For instance:

```shell
GENERATE_CONTENT=1 npm run dev
```

Notice that, for communicating with the team tools, API keys may be required. It is the case of dealing with Airtable for the generation of the event index. If you think you should have access to these tables, talk to the Events Squad in the Community Team, get your developer API key and set the `AIRTABLE_API_KEY` environment variable to this value:

```shell
GENERATE_CONTENT=1 AIRTABLE_API_KEY=<your airtable api key> npm run dev
```

<br/>

## ✏️ How to Contribute

Contributions are always welcomed, no matter how large or small. Before contributing, please read the [contributing guide](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md).

<br/>

## 🗓 Open backlog

We actively maintain our backlog using [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects). You can view our backlog [here](https://github.com/orgs/Qiskit/projects/10).

<br/>

## 👩‍💻 Maintainers

<table>
<tr>
<td align="center"><a href="https://github.com/eddybrando"><img src="https://avatars2.githubusercontent.com/u/22047320?s=460&u=58f460132271f2ea45d270841f3821eb46c4bb5e&v=4" width="120px;" alt="Eddybrando Vásquez"/><br /><sub><b>Eddybrando Vásquez</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Aeddybrando" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=eddybrando" title="Code">💻</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/techtolentino"><img src="https://avatars2.githubusercontent.com/u/6276074?s=460&v=4" width="120px;" alt="Randy Tolentino"/><br /><sub><b>Randy Tolentino</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Atechtolentino" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=techtolentino" title="Code">💻</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/JRussellHuffman"><img src="https://avatars1.githubusercontent.com/u/7633881?s=460&u=8c1e462d7fdb0f899ee02f70a4990e693b96226f&v=4" width="120px;" alt="Randy Tolentino"/><br /><sub><b>Russell Huffman</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3AJRussellHuffman" title="Design">🎨</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
<td align="center"><a href="https://github.com/y4izus"><img src="https://avatars2.githubusercontent.com/u/17231966?s=460&v=4" width="120px;" alt="Yaiza García"/><br /><sub><b>Yaiza García</b></sub></a><br /><a href="https://github.com/qiskit/qiskit.org/issues?q=author%3Ay4izus" title="Bug reports">🐛</a><a href="https://github.com/qiskit/qiskit.org/commits?author=y4izus" title="Code">💻</a><a href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM" title="Answering Questions on Slack">💬</a></td>
</tr>
</table>

<br/>

## 🔗 Connect with Qiskit

- [Twitter](https://twitter.com/qiskit)
- [Medium](https://medium.com/Qiskit)
- [YouTube](https://www.youtube.com/Qiskit)
- [Slack](https://qisk.it/join-slack)
