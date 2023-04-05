# Qiskit.org architecture overview

Technical overview of how the code is structured and how it all comes together.

We try to follow [Nuxt 3](https://nuxt.com/)'s recommendations and best practices. This document only covers the parts that are specific to Qiskit.org.

## Table of contents

- [Design system](#design-system)
- [CSS](#css)
- [Testing](#testing)
- [Third-party integrations](#third-party-integrations)

## Design system

Our design is based on the [Carbon Design System](https://www.carbondesignsystem.com/).

## CSS

We write our CSS in SCSS and employ [BEM's naming convention](https://getbem.com/).

## Testing

We test our codebase with Vitest tests. These are integrated into our CI/CD pipeline, preventing code changes containing non-passing tests to be integrated into our main branch.

## Third-party integrations

### Airtable

We fetch content from [Airtable](https://airtable.com/) during our builds for production.

This content is then stored in JSON files and used to be displayed in the website.

### Carbon Web Components

We use web components from the [Carbon Web Components](https://github.com/carbon-design-system/carbon-for-ibm-dotcom) component library.

### Hotjar

We use Hotjar for analytics.

### Segment

We use [Segment](https://segment.com/) for analytics.
