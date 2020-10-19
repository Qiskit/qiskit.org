# CONTRIBUTING

Regardless if you are part of the core team or an external contributor, welcome and
thank you for contributing to https://qiskit.org!

In qiskit.org, we aim at creating an excellent work-space where all of us can feel
welcomed, useful, respected and valued. If you are thinking to contribute to
qiskit.org, you agree to abide by our [code of conduct](CODE_OF_CONDUCT.md) which
we strongly recommend you read before continuing.

Following these guidelines communicates you value the time and effort of the core
contributors and maintainers of this site and so, thank you!

## Start contributing

This repository is for developing and maintaining https://qiskit.org, the website.
If you want to contribute to Qiskit, the open-source Python library, you should go
visit the [Qiskit repository](https://github.com/Qiskit/qiskit) instead.

There are many ways of contributing: from catching a typo to coming up with a way
of improving performance or accessibility; you can open an issue, or you can prepare
a patch. In any case, read the contribution guidelines for opening new issues and
submitting pull requests.

Please, don't use this repository for asking questions about Qiskit: there are
better ways to do it. Refer to our public [Slack](https://ibm.co/joinqiskitslack)
or post a question in [stack overflow](https://stackoverflow.com/questions/tagged/qiskit).

## Before you start

Contributing to qiskit.org, and other Qiskit repositories, assumes you have some level
of [Git](https://git-scm.com) knowledge. For external contributors, a basic understanding
of repositories, remotes, branches and commits is needed. For core contributors, you
should know about resolving conflicts and rebasing too.

There are tons of useful resources about Git [out there](https://try.github.io/).

## Opening issues

You can [open 4 types of issues](https://github.com/Qiskit/qiskit.org/issues/new/choose):

* Bug reports: for reporting a misfunction. Provide steps to reproduce and expected behaviour.
* Content issues: for noticing content-related problems such as typos or rewordings.
* Tasks: a general "to do", in case none of the other templates suits you.
* User stories: for identifying new value for the user.

In addition to these 4 templates, the most common types of tasks are:

* Plain tasks: these are the things that a core contributor usually work on during the sprint.
* [Refactors](https://github.com/Qiskit/qiskit.org/issues?q=label%3A%22type%3A+refactor%22+): these aim at improving our codebase and reducing technical debt.
* [Discussions](https://github.com/Qiskit/qiskit.org/issues?q=label%3A%22type%3A+discussion%22): these provide a central hub for talking about something to [reach a consensus](https://github.com/Qiskit/qiskit.org/issues?q=label%3ADecided+).

Core contributors classify the tasks according to its nature and prioritize them
from sprint to sprint. Types are not mutually exclusive and can change over time
if needed.

## Contributing code

### Setup

So you decided to get your hands dirty and start working on a patch? Then you
need to know that qiskit.org follows the
[Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)
with [Feature Branches](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Regardless if you are a core contributor or not, the above means we expect you to fork
the project on your own GitHub account and make your `master` branch to track this
repository. A typical Git setup after
[forking the project](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) is:

```sh
# After forking the repository in GitHub
git clone https://github.com/<your_username>/qiskit.org.git
cd qiskit.org
git remote add upstream https://github.com/qiskit/qiskit.org.git
git remote update upstream
git checkout master
git branch -u upstream/master
git pull
```

### Working on an issue

When you are going to start working on an issue, make sure you are in your `master`
branch and that it is entirely up to date and create a new branch with a
meaningful name. The typical terminal code for this is:

```sh
git checkout master
git pull upstream master
git checkout -b issue-1234-new-header
```

Now start adding your changes and remember to commit often:

```sh
git commit
```

And include a summary and some notes or clarifications if needed:

```
Create a new header layout.

Includes a new component factoring out the header of this new page and others.
```

From time to time, you want to check if your `master` branch is still up to
date. If not, you will need to
[rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) and
continue working:

```sh
git checkout master
git pull
git checkout issue-1234-new-header
git rebase -i master
```

Use the interactive `-i` option of rebase to polish the history of your branch.

### Feature branches

Very often, implementing a user story implies publishing several features in an atomic
batch. When it happens, we use a feature branch in the main repository for integrating
all the needed changes before merging to `master`.

When working against a feature branch, you consider the feature branch to be the
`master` branch and so, when about to start a new task, you do:

```sh
git checkout feature-branch
git pull upstream feature-branch
git checkout -b issue-1234-new-header
```

And keep an eye on `feature-branch` to always rebase your code on top of the most
updated version of the `feature-branch`:

```sh
git checkout feature-branch
git pull upstream feature-branch
git checkout issue-1234-new-header
git rebase -i feature-branch
```

### Pull requests

Pull requests serve a double purpose:
1. Share the code with the team. So almost everybody is aware of how the code base is evolving.
2. Provide an opportunity for improving code quality.

When you think your work is done, push the branch to your repository:

```sh
git push origin issue-1234-new-header
# Start a pull request in GitHub
```

And
[create a pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
against `master` (or a feature branch).
When creating the pull request, provide a description and
[link with the issue that is being solved](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

Linking the issue has the advantage of automatically closing the related issue when the pull
request is merged. Unfortunately, this does not work when merging pull requests agains a feature
branch. In these occassions, remember to manually close the related pull requests after
[merging the pull request](#merging).

### Live previews

As part of our continuous integration infrastructure, every pull request receives a
dedicated URL by [Vercel](https://vercel.com/) to preview the changes in it.

When the contribution comes from an external contributor, previews require authorization
from one of the core members of the team.

### Code review

Once you have sent a PR, the code contributors get notified, and there may be a code
review. The code review helps solving implementation, semantic and maintainability issues.

The repository also contains some automated checks such as tests and linting. For a 
pull request to be ready for merging it needs to **pass automatic checks and have,
at least, one positive review**.

During code reviews, there are two prominent roles: the reviewer and the contributor.
The reviewer acts as the keeper of best-practices and code quality, asking 
clarifying questions, highlighting implementation errors and recommending changes.
We expect the contributor to take recommendations seriously and be willing to
implement suggested changes or take some other action instead.

Notice we don't expect the contributors to address **all** the comments, nor
the reviewer highlight **all** the issues, we hope both take some compromises to provide
as much value and quality as it fits in the estimated effort.

We don't expect discussions happen in the pull requests. If there is a disagreement,
our recommendation is for the contributor to yield to the reviewer and for the reviewer
to suggest other alternatives.

### Merging

Once all automated checks are passing and there is a positive review, the pull request
can be merged. It does not matter if it is the author or the reviewer who merges the
PR.

When merging a regular pull request against `master` or a feature branch, the PR should
be merged with the
[Squash and Merge](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squash-and-merge-your-pull-request-commits)
option.

When merging a feature branch against `master`, its history should be sanitized and
merge with [Rebase and Merge](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#rebase-and-merge-your-pull-request-commits) to preserve all the intermediate commits.

### Continuous integration

Once a pull request is merged into `master`, a new version of the site is published and
becomes online in about 5 minutes, depending on how busy is
[the queue of Travis](https://travis-ci.com/qiskit/qiskit.org).

### Delayed reviews

A delayed code review is a code review that happens after the PR is merged. It is intended to
reduce waiting times for implementers and maximize short-term productivity at the expense
of fixing technical debt by the end of the sprint.

They can only happen when the pull request is created against a feature branch. The delayed code
review is required to be addressed in the same sprint, and a final review of the feature branch is
required before merging. **No code can be merged into `master` without revision**.

Delayed reviews can only happen for pull requests authored by core members of the team and the
strategy needs to be agreed in advance.

### Team best practices

#### Apply the Scout Rule

[Leave the code better than you found it...](https://martinfowler.com/bliki/OpportunisticRefactoring.html)
in the context of what you're addressing.

Boy Scouts have a rule that says: "Always leave the campground cleaner than you found it",
which does not mean, "leave the whole forest cleaner than you found it". 

#### Keep the pull request focused

A pull request should solve only one thing. This makes it easier to review and share, reduce
risk and criticality and improve understanding of the changes. If you find yourself in
a position of doing more than needed, even if this is something trivial but not directly
related to your current work, come back later! Open a new issue and come back later to address
that problem. Follow-ups are welcome!

#### Open follow-ups

We know it. It is hard just to ignore that something else can be improved. Don't do it.

When you foresee that addressing a problem will take more effort than documenting it,
choose the latter and open a follow-up. When assessing the effort, think twice:
1. Once for you to make the change.
2. Another for the reviewer to switch context and review the changes.

#### Review in layers

When reviewing, highlighting all the things that you consider can be improved may be
exhausting for the contributor. Instead of noticing everything at the same time, try to layer
your review.

1. Start by testing the branch and indicating errors in the implementation.
2. Continue asking for clarifications about what you don't understand.
3. Then, address semantic and architectural problems including type annotations that will result in the hardest-to-remove technical debt in the future.
4. Now, you can focus on readability: typos, variable names, team idioms, style violations not caught by the automated checks.
5. Finally, go for other less critical code smells.

#### Make branch names meaningful

Include your initials, the number of the issue or both. That helps to identify who started
the branch and what issue is being addressed:

```
sp-issue-1234-implement-new-header
```

#### Sanitize your branch history

Rebase on your own history to reorder, fix and squash your history. Remember that each commit
should represent a meaningful atomic change. For instance, if you commit a new functionality
just to realize it is broken because you misspelt a variable, add another commit for fixing it,
then rebase and combine both commits together.

## Code style

### Type annotations

### Writing components

## Project management

In Qiskit, we take open-source seriously and want to be open and transparent to
our community. This is why we keep most of our management public, with the help
of [projects](https://github.com/Qiskit/qiskit.org/projects) for sprint planning and
[issues](https://github.com/Qiskit/qiskit.org/issues) for tracking what needs to
be done.

We use a customized version of [scrum](https://www.atlassian.com/agile/scrum) with
2-weeks sprints and online dailies:

| What?                | Why?                                                           | When?                                            | Where?                    |
|----------------------|----------------------------------------------------------------|--------------------------------------------------|---------------------------|
| Sprint planning      | To plan for the next 2 weeks                                   | Every other Monday from 10.30 am to 11.30 am EST | Leron's WebEx room        |
| Sprint review        | To present the work of the sprint in front of the stakeholders | Every other Friday from 10.00 am to 11.00 am EST | Leron's WebEx room        |
| Sprint retrospective | To review and improve our processes                            | Every other Friday from 11.00 am to 11.45 am EST | Salva's WebEx room        |
| Dailies              | To plan for the day and keep the team aware about our work     | All days at 10.00 am EST                         | In `qiskit-digital` Slack |

A regular sprint looks like follows: the backlog gets populated and prioritized
with [user stories](https://github.com/Qiskit/qiskit.org/issues?q=is%3Aopen+is%3Aissue+label%3A%22type%3A+user+story%22) before the sprint planning.
During sprint planning, we split, describe and estimate the work to be done.
We work on resolving the tasks for two weeks and, during the sprint review,
we demo the work we've been doing. We use retrospective to improve our procedures
and start over.

### Team best practices

We are a global team! Our team is spread through Europe and the US. Remote-working implies
we need to be flexible with our schedules and mindful about our team-mates working times.
It pays off by enabling us to deliver value for almost 24 hours a day. 

#### Talk soon, talk often

We are an agile team, so we value
[individuals and interactions over processes and tools](https://agilemanifesto.org/) so,
please, use the common Slack channels for sharing important information about the
development of the sprint.

Working in a global team imposes new communication challenges. If the information
is not shared, part of the team can (in words of @techtolentino) go to sleep fully
aligned and awake completely misaligned!

#### Keep track of compromises

Development is a matter of assuming trade-offs. There will be sprints when we focus
on quality to reduce technical debt, there will be sprints when we focus on speed to meet
a deadline and there will be sprints when we balance quality and speed.

This also applies to your day-to-day. While you work on fixing issues, you will need to
make decisions. Some solutions will seem better than others, and you will make
compromises... Track them!

If you are delaying work, create a follow-up, if you find unnoted technical debt, open an
issue and make it visible, if you got stuck in a discussion, open a discussion issue and ask
for participation.

#### Estimate issues

Estimating issues enables the team to known their limits, prepare for the future and
balance the technical effort with the sprint size and project deadlines. We use a simple
scale based more in some shared intuition rather than specific definitions but if you
are new to the team, we hope this will help you:

| Effort      | Time scale   |
|-------------|--------------|
| Small       | Hour scale   |
| Medium      | Day scale    |
| Large       | Week scale   |
| Extra large | Sprint scale |

Estimation does not include the time of implementation only, it must take the time of
review into consideration too. The whole team agrees on the size of a task which implies both, implementer and reviewer
of the task, need to make implementation and review fit in the effort agreed.

#### Split the tasks

Splitting tasks helps in keeping issues small, focused and independent so
**more people can work in parallel without waiting times**.
