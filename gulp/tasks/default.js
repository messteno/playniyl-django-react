'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {

    cb = cb || function() {};
    global.isProd = false;
    runSequence('modernizr', [
        'images',
        'styl',
        'fonts',
        'lint',
        'browserify',
        'html'
    ], 'watch', cb);

});
