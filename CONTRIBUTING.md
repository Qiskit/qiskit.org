# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Setup

1. **Download this repository and go to its folder**

    ```shell
     git clone git@github.com:Qiskit/qiskit.org.git && cd qiskit.org
    ```

2. **Install dependencies**

    ```shell
   npm install
    ```

3. **Run the development server with hot reload at [localhost:3000](localhost:3000)**

   ```shell
   npm run dev
   ```

## Available scripts

Run a local server enabling inspector agent:
```shell
  npm run dev-debug
```

Run unit tests made with [Jest](https://jestjs.io/):
```shell
  npm run test
```

Build static version ready for production, output will generated inside a new folder called `dist`:
```shell
  npm run build
```

Run a local server on the website's production built. Make sure you ran `npm run build` first:
```shell
  npm run start
```

Find syntax errors. We use [ESLint](https://eslint.org/):
```shell
  npm run lint
```

Autofix linter:
```shell
  npm run fix-lint
```


## Pull Requests

We actively welcome your pull requests!

If you need help with Git or our workflow, please ask on [Slack](https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM). We want your contributions even if you're just learning Git. Our maintainers are happy to help!

Qiskit.org uses the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) + [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Additionally, PR's should be [rebased](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) on master when opened, and again before merging.

1. Fork the repo.
2. Create a branch from `master`. If you're addressing a specific issue, prefix your branch name with the issue number.
3. If you've added code that should be tested, add tests.
4. Run `npm run test` and ensure the test suite passes.
5. Use `npm run lint` to format and lint your code.
6. PR's must be rebased before merge (feel free to ask for help).
7. PR should be reviewed by one maintainer prior to merging.

## License

By contributing to Qiskit.org, you agree that your contributions will be licensed
under its [Apache License 2.0](LICENSE.txt).

NOTE: If you work for a company that wants to allow you to contribute your work,
then you'll need to sign a [corporate CLA](https://qiskit.org/license/qiskit-corporate-cla.pdf)
and email it to us at [qiskit@us.ibm.com](mailto:qiskit@us.ibm.com).
