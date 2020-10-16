# CONTRIBUTING

Regardless if you are part of the core team or an external contributor, welcome and
thank you for contributing to qiskit.org!

In qiskit.org we aim at creating an excellent work-space where all of us can feel
welcomed, useful, respected and valued. If you are thinking to contribute to
qiskit.org, you agree to abide by our [code of conduct](CODE_OF_CONDUCT.md) which
we strongly recommend you read before continuing.

Following these guidelines communicates you value the time and effort of the core
contributors and maintainers of this site.

## Pull Requests

We actively welcome your pull requests!

Qiskit.org uses the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) + [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow). Additionally, PR's should be [rebased](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) on master when opened, and again before merging.

1. Fork the repo.
2. Create a branch from `master`. If you're addressing a specific issue, prefix your branch name with the issue number.
3. If you've added code that should be tested, add tests.
4. Run `npm run test` and ensure the test suite passes.
5. Use `npm run lint` to find syntax errors and `npm run fix-lint` to format the code and fix them.
6. PR's must be rebased before merge (feel free to ask for help).
7. PR should be reviewed by one maintainer prior to merging.

## Project management

In Qiskit, we take open-source seriously and want to be open and transparent to
our community. This is why we keep most of our management public, with the help
of [projects](https://github.com/Qiskit/qiskit.org/projects) for sprint planning and
[issues](https://github.com/Qiskit/qiskit.org/issues) for tracking what needs to
be done.

We use a customized version of scrum with 2-weeks sprints and online dailies:

| What?                | Why?                                                           | When?                                            | Where?                    |
|----------------------|----------------------------------------------------------------|--------------------------------------------------|---------------------------|
| Sprint planning      | To plan for the next 2 weeks                                   | Every other Monday from 10.30 am to 11.30 am EST | Leron's WebEx room        |
| Sprint review        | To present the work of the review in front of the stakeholders | Every other Friday from 10.00 am to 11.00 am EST | Leron's WebEx room        |
| Sprint retrospective | To review and improve our processes                            | Every other Friday from 11.00 am to 11.45 am EST | Salva's WebEx room        |
| Dailies              | To plan for the day and keep the team aware about our work     | All days at 10.00 am EST                         | In `qiskit-digital` Slack |

A regular sprint looks like follows: the backlog gets populated and prioritized
with [user stories](https://github.com/Qiskit/qiskit.org/issues?q=is%3Aopen+is%3Aissue+label%3A%22type%3A+user+story%22) prior to the sprint planning.
During sprint planning, we split, describe and estimate the work to be done.
We work on resolving the tasks during two weeks and, during the sprint review,
we demo the work we've been doing. We use the retrospective to improve our procedures
and start over.

### Team best practices

We are a global team! Our team is spread through Europe and the US. Delocation implies
we need to be flexible with our schedules and mindful about our team-mates working times.
It pays off by enabling us to deliver value during almost 24 hours a day. 

#### Talk soon, talk often

We are an agile team so we value
[individuals and interactions over processes and tools](https://agilemanifesto.org/) so,
please, use the common Slack channels for sharing important information about the
development of the sprint.

Working in a delocated team imposes new communication challenges. If the information
is not shared, part of the team can (in words of @techtolentino) go to sleep fully
aligned and awake completely missaligned!

#### Keep track of compromises

Development is a matter of assuming trade-offs. There will be sprints when we focus
on quality to reduce technical debt, there will be sprints when we focus on speed to meet
a deadline and there will be sprints when we balance quality and speed.

This also applies to your day-to-day. While you work on fixing issues, you will need to
make decisions. Some solutions will seem better than others and you will make
compromises... Track them!

If you are delaying work, create a follow-up, if you find unnoted technical debt, open an
issue visibilize it, if you got stuck in a discussion, open a discussion issue and ask
for participation.

#### Split the tasks

Splitting tasks has the benefit of enabling fast value delivering and resolving locks
and conflict issues so, if you feel stuck in an issue, try splitting it into the part
you already solved and that causing the blockage.

#### Estimate issues

Estimating issues allow us to learn, improve our time estimations and balance technical
effort with sprint size and project deadlines. We use a simple scale based more in some
shared intuition rather than specific definitions but if you are new to the team, we
hope this will help you:

| Effort      | Time scale         |
|-------------|--------------------|
| Small       | Day scale          |
| Medium      | Several-days scale |
| Large       | Week scale         |
| Extra large | Sprint scale       |
