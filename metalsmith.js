const Metalsmith = require('metalsmith');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    sitename: 'IBM Q Community',
    siteurl: 'https://qiskit.org/community',
  })
  .source('./community-src/collections/')
  .destination('./community/')
  .clean(true)
  .use(
    collections({
      events: 'events/*.md',
    }),
  )
  .use(markdown())
  .use(
    permalinks({
      relative: false,
    }),
  )
  .use(
    layouts({
      directory: './community-src/layouts',
    }),
  )
  .build(err => {
    if (err) throw err;
  });
