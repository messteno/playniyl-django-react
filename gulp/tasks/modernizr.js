'use strict';

var gulp      = require('gulp');
var modernizr = require('gulp-modernizr');
var config    = require('../config');
var gulpif       = require('gulp-if');
var streamify    = require('gulp-streamify');
var uglify       = require('gulp-uglify');
var size         = require('gulp-size');
var gzip         = require('gulp-gzip');

gulp.task('modernizr', function() {
    gulp.src(config.src.bower + '/modernizr/src/*.js')
    .pipe(modernizr())
    .pipe(gulpif(global.isProd, streamify(uglify({
        compress: { drop_console: true }
    }))))
    .pipe(streamify(size({
        title: 'Modernizr',
    })))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(gulpif(global.isProd, gzip(config.gzip.options)))
    .pipe(gulpif(global.isProd, gulp.dest(config.scripts.dest)))
});
