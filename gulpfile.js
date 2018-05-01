var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// @ts-ignore
var header = require('gulp-header');
// @ts-ignore
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
// @ts-ignore
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
// @ts-ignore
gulp.task('minify-css', ['sass'], function () {
  return gulp.src(['css/site.css',
                  'css/mobile.css'
    ])
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
  return gulp.src(['js/site.js', 'js/site-space.js'])
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
// @ts-ignore
gulp.task('js-watch', ['minify-js'], function (done) {
  browserSync.reload();
  done();
});

// ensure sass finishes, reload browser
// @ts-ignore
gulp.task('sass-watch', ['minify-css'], function (done) {
  browserSync.reload();
  done();
});

// Dev task with browserSync
// @ts-ignore
gulp.task('serve', ['sass', 'minify-js'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    ui: {
      port: 8001 // customize port for browserSync UI
    },
    port: 8080, // use 8080 to prevent conflicts with other localhosts
    reloadOnRestart: true,
    notify: false // prevent the browserSync notification from appearing
  });
  // @ts-ignore
  gulp.watch('js/*.js', ['js-watch']);
  // @ts-ignore
  gulp.watch('sass/*.scss', ['sass-watch']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
});

// @ts-ignore
gulp.task('default', ['sass', 'minify-css', 'minify-js']);
