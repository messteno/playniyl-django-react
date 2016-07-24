'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

    cb = cb || function() {};
    global.isProd = true;
    runSequence('modernizr', ['images', 'styl', 'fonts', 'lint', 'browserify', 'html'], 'gzip', cb);

});
