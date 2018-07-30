/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

const gulp = require('gulp');
const inject = require('gulp-inject-string');

const buildPath = 'build/es5-bundled/';

gulp.task('add-ibm-stats-script', () => {
  const script = `
      <script>
        /* Define digital data object based on _appInfo object */
        window.digitalData = {
          page: {
            category: {
              primaryCategory: 'ibm-research'
            },
            pageInfo: {
              ibm: {
                siteID: 'qiskit'
              }
            }
          }
        };
      </script>
      <script src="//1.www.s81c.com/common/stats/ida_stats.js"></script>
    `;

  return gulp
    .src(`${buildPath}index.html`)
    .pipe(inject.before('</body>', script))
    .pipe(gulp.dest(buildPath));
});

function moveFolderToBuildPath(folderPath) {
  return gulp
    .src(`${folderPath}**`)
    .pipe(gulp.dest(`${buildPath}${folderPath}`));
}

gulp.task('copy:license', () => moveFolderToBuildPath('license/'));
gulp.task('copy:documentation', () => moveFolderToBuildPath('documentation/'));
gulp.task('copy:modelq', () => moveFolderToBuildPath('modelq/'));

gulp.task(
  'copy',
  gulp.series('copy:documentation', 'copy:license', 'copy:modelq'),
);
