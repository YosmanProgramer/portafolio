'use strict';

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

exports.sass = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('./css'));
};

exports.minificar = () => {
  return src('./sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('./css'));
};

exports.default = () => {
  watch('./sass/**/*.scss', this.sass);
};
