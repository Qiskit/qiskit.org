/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

const { dest, parallel, series, src, task } = require('gulp');
const inject = require('gulp-inject-string');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const del = require('del');

const buildPath = 'build/';
const serverBuildPath = 'server/build/';

/**
 * Cleans the prpl-server build in the server directory.
 */
task('prpl-server:clean', () => {
  return del(serverBuildPath);
});

/**
 * Add IBM Stats script.
 */
task('add-ibm-stats-script', () => {
  const script = `
    <script>
      /* Define digital data object based on _appInfo object */
      window.digitalData = {
        page: {
          pageInfo: {
            productTitle: 'IBM Q Experience',
            analytics: {
              category: 'Qiskit.org',
            },
          },
        },
      };
      window._analytics = {
        segment_key: 'zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H',
        coremetrics: false,
        optimizely: false,
        googleAddServices: false,
        fullStory: false,
        autoPageEventSpa: true,
        autoFormEvents: false,
        autoPageView: true
      };
    </script>
    <script async src="https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js"></script>
    <!-- Hotjar Tracking Code for ibm.com -->
    <script>
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:42920,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
  `;

  return src(`${buildPath}**/index.html`)
    .pipe(inject.before('</body>', script))
    .pipe(dest(buildPath));
});

/**
 * Copy static files.
 */
task('copy-license', () => src('license/**').pipe(dest(`${buildPath}license`)));
task('copy-documentation', () =>
  src('documentation/**').pipe(dest(`${buildPath}documentation`)),
);
task('copy-events', () => src('events/**').pipe(dest(`${buildPath}events`)));
task('copy-modelq', () => src('modelq/**').pipe(dest(`${buildPath}modelq`)));
task('copy-robots', () => src('robots.txt').pipe(dest(`${buildPath}`)));
task(
  'copy-static-files',
  parallel(
    'copy-license',
    'copy-documentation',
    'copy-events',
    'copy-modelq',
    'copy-robots',
  ),
);

/**
 * Copies the prpl-server build to the server directory while renaming the
 * node_modules directory so services like App Engine will upload it.
 */
task('prpl-server:build', () => {
  const pattern = 'node_modules';
  const replacement = 'node_assets';

  return src(`${buildPath}**`)
    .pipe(
      rename(path => {
        // eslint-disable-next-line
        path.basename = path.basename.replace(pattern, replacement);
        // eslint-disable-next-line
        path.dirname = path.dirname.replace(pattern, replacement);
      }),
    )
    .pipe(replace(pattern, replacement))
    .pipe(dest(serverBuildPath));
});

exports['setup:prpl-server'] = series(
  'prpl-server:clean',
  'add-ibm-stats-script',
  'copy-static-files',
  'prpl-server:build',
);
