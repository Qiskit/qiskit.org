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
  .destination('./')
  .clean(false) // Keep false or it will wipe out the dst folder
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
