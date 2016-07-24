'use strict';

var config  = require('../config');
var gulp    = require('gulp');
var eslint  = require('gulp-eslint');
var notify  = require('gulp-notify');
var cache   = require('gulp-cached');

gulp.task('lint', function() {
    return gulp.src(config.scripts.src)
    .pipe(cache('linting'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', function(error) {
        var args = Array.prototype.slice.call(arguments);
        console.log(error);
        notify.onError({
            title: error.name,
            message: error.message,
        }).apply(this, args);
        this.emit('end');
    });
});
