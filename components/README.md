# COMPONENTS

The components directory contains the Vue.js Components. We are working with the following structure to organize our components:
- 📁 **ui/** : Generic components like button, carousel, list, ... not related to an specific domain that can be reusable across the whole app
- 📁 **layout/** : Components that are used in the nuxt `layouts` folder (Header, Footer, ...). They are part of all pages. 
- 📁 **logic/** : Components that only has logic inside, not `<template>` block
- 📁 **[domain]/** : Components that belong to a specific domain. The folder name should be the "domain" it refers to, having one folder per domain. For example, an AdvocateCard is related to the advocates domain, even if it is used in more than one place. If we have a generic `card` that can be used for both `advocates` and `events` (for example) it should go to ui. At the moment, we have the following domains:
    - 📁 **advocates/**
    - 📁 **education/**
    - 📁 **elements/** : The are `aer`, `ignis`, `terra` and `aqua`, but we also include `ibmqaccount`.
    - 📁 **events/**
    - 📁 **experiments/**

You should also have in mind this guidelines:
- If your component is compound of more subcomponents, make a folder called like the component (like with `ui/footer`).
- If you add a component similar to another one, consider creating a folder with the naming the collection of components (as in `ui/sections`).
