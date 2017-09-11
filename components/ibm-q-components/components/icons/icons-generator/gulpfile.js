/*
 * @license
 * Copyright (c) 2017 The IBM Research authors. All rights reserved.
 * This code may only be used under the MIT style license found at https://ibmresearch.github.io/LICENSE.txt
 * The complete set of authors may be found at https://ibmresearch.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://ibmresearch.github.io/CONTRIBUTORS.txt
 */

/* eslint-env node, es6 */
/* eslint-disable no-console */

'use strict';

const del = require('del');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const gulp = require('gulp');
const concat = require('gulp-concat');
const git = require('gulp-git');
const modify = require('gulp-modify');

const template = require('./template');

function getFolders(directory) {
  return fs.readdirSync(directory).filter((file) => {
    return fs.statSync(path.join(directory, file)).isDirectory();
  });
}

function gitClone(repository, folderName) {
  return new Promise((resolve) => {
    git.clone(repository, { args: folderName }, () => {
      resolve();
    });
  });
}

function generateSvgGroups(size, file, contents) {
  const regex = new RegExp(`.*/(.*)_${size}.svg`);
  const id = file.path.replace(regex, '$1');
  const svg = cheerio.load(contents, { xmlMode: true })('svg');

  svg.children('[fill]').removeAttr('fill');

  return `      <g id="${id}">${svg.children()}</g>`;
}

function generateIconset(iconsPath, iconsetName, iconsetSize) {
  const iconsetFileName = `ibm-q-${iconsetName}-icons.html`;

  console.log(`Generating '${iconsetFileName}'...`);

  gulp.src(iconsPath)
    .pipe(modify({
      fileModifier: (file, contents) => {
        return generateSvgGroups(iconsetSize, file, contents);
      }
    }))
    .pipe(concat(iconsetFileName))
    .pipe(modify({
      fileModifier: (file, contents) => {
        return template.stamp(iconsetName, iconsetSize, contents);
      }
    }))
    .pipe(gulp.dest('..'));
}

function generateIcons() {
  return new Promise((resolve) => {
    const repository = 'git@github.com:IBM-Design/icons.git';
    const folderName = 'ibm-design-icons';

    console.log(`Deleting a possible previous '${folderName}' directory...`);
    del([folderName])
      .then(() => {
        console.log(`Cloning ${repository} into '${folderName}' directory...`);
        return gitClone(repository, folderName);
      })
      .then(() => {
        const iconsetsPath = path.join(folderName, 'dist/svg/');
        const iconsetsFolders = getFolders(iconsetsPath);

        iconsetsFolders.map((iconsetFolder) => {
          // Generate Glyphs
          const glyphsetSize = 24;
          const glyphsPath = path.join(iconsetsPath, iconsetFolder, `*_${glyphsetSize}.svg`);
          generateIconset(glyphsPath, `${iconsetFolder}-glyphs`, glyphsetSize);

          // Generate Icons
          const iconsetSize = 64;
          const iconsPath = path.join(iconsetsPath, iconsetFolder, `*_${iconsetSize}.svg`);
          generateIconset(iconsPath, iconsetFolder, iconsetSize);
        });
      })
      .then(() => {
        console.log('The icon sets have been generated correctly!');
        resolve();
      });
  });
}

gulp.task('generate-icons', generateIcons);
