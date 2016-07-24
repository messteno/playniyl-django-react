'use strict';

var dotDir = function(dir) {
    return './' + dir;
};

var srcDir = 'frontend';
var buildDir = 'frontend/dist';
var bowerDir = 'bower_components';

module.exports = {
    'src': {
        'root': srcDir,
        'bower': bowerDir,
    },

    'dist': {
        'root': buildDir,
    },

    'scripts': {
        'src': srcDir + '/app/**/*.js',
        'dest': buildDir + '/js/',
    },

    'fonts': {
        'src': [
            bowerDir + '/font-awesome/fonts/**/*',
            bowerDir + '/font-roboto/dist/fonts/**/*',
            srcDir + '/fonts/**/*',
        ],
        'dest': buildDir + '/fonts/',
    },

    'html': {
        'src': srcDir + '/html/**/*.html',
        'dest': buildDir + '/html/',
    },

    'gzip': {
        'src': buildDir + '/**/*.{html,xml,json,css}',
        'dest': buildDir,
        'options': {}
    },

    'browserify': {
        'entries': [{
            'src': dotDir(srcDir) + '/app/app.js',
            'dest': 'playvinyl.js',
        }],
        'sourcemap': true,
    },

    'images': {
        'src': [
            srcDir + '/img/**/*.{svg,png,jpg,jpeg,ico,gif}',
        ],
        'dest': buildDir + '/img/',
    },

    'styl': {
        'entries': [
            srcDir + '/styl/playvinyl.styl',
        ],
        'src': srcDir + '/styl/**/*.styl',
        'dest': buildDir + '/css/',
    },

};

