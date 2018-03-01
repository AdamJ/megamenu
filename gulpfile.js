var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var fs = require('fs');

// Set the banner content
var banner = ['/*!\n',
  ' * https://www.adamjolicoeur.com/megamenu\n',
  ' * <%= pkg.title %> v<%= pkg.version %>\n',
  ' * Copyright 2008-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %>\n',
  ' */\n',
  ''
].join('');

gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function () {
  return gulp.src('css/site.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify JS
gulp.task('minify-js', function () {
  return gulp.src('js/site.js')
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function () {
  gulp.src(['node_modules/font-awesome/**'])
    .pipe(gulp.dest('fonts/font-awesome'))
});

// ensure js finishes, reload browser
gulp.task('js-watch', ['minify-js'], function (done) {
  browserSync.reload();
  done();
});

// ensure sass finishes, reload browser
gulp.task('sass-watch', ['minify-css'], function (done) {
  browserSync.reload();
  done();
});

// Dev task with browserSync
gulp.task('serve', ['sass', 'minify-js'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('js/*.js', ['js-watch']);
  gulp.watch('sass/*.scss', ['sass-watch']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'minify-css', 'minify-js']);
