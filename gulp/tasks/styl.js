'use strict';

var config       = require('../config');
var handleErrors = require('../util/handleErrors');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var stylus       = require('gulp-stylus');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer-stylus');
var nib          = require('nib');
var cssnano      = require('gulp-cssnano');
var size         = require('gulp-size');
var streamify    = require('gulp-streamify');

gulp.task('styl', function () {

    return gulp.src(config.styl.entries)
    .pipe(sourcemaps.init())
    .pipe(stylus({
        paths: [
            config.src.bower,
            config.dist.root,
        ],
        use: [
            nib(),
            autoprefixer('last 2 versions'),
        ],
        'include css': true,
    }))
    .on('error', handleErrors)
    .pipe(gulpif(global.isProd, cssnano({
        mergeRules: false,
        zindex: false,
        safe: true
    })))
    .pipe(streamify(size({
        title: 'styl',
    })))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styl.dest));

});

