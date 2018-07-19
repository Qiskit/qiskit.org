/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

const gulp = require('gulp');

const buildPath = 'build/es5-bundled/';

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
