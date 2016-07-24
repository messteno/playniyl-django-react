'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var watch       = require('gulp-watch');
var runSequence = require('run-sequence');

gulp.task('watch', [], function() {

    watch(config.scripts.src, function() {
        gulp.start('lint');
    });
    watch(config.styl.src, function() {
        runSequence('styl');
    });
    watch(config.fonts.src, function() {
        gulp.start('fonts');
    });
    watch(config.html.src, function() {
        gulp.start('html');
    });
    watch(config.images.src, function() {
        gulp.start('images');
    });

});
