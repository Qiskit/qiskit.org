/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

const { dest, series, src } = require('gulp');
const del = require('del');
const inject = require('gulp-inject-string');

const buildPath = 'build/';

const serverPath = 'server/prpl/';
const serverBuildPath = `${serverPath}${buildPath}`;

function clean() {
  return del(serverBuildPath);
}

function addIbmStatsScript() {
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

  return src(`${buildPath}**/index.html`)
    .pipe(inject.before('</body>', script))
    .pipe(dest(buildPath));
}

function copyStaticFiles() {
  return src('license/**')
    .pipe(dest(`${buildPath}license`))
    .pipe(src('documentation/**'))
    .pipe(dest(`${buildPath}documentation`))
    .pipe(src('modelq/**'))
    .pipe(dest(`${buildPath}modelq`));
}

function copyBuildFolder() {
  return src(`${buildPath}**`).pipe(dest(serverBuildPath));
}

exports['setup:prpl-server'] = series(
  clean,
  addIbmStatsScript,
  copyStaticFiles,
  copyBuildFolder,
);
