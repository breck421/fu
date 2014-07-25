/*global module:false*/

/*Generated initially from grunt-init, heavily inspired by yo webapp*/

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: './.jshintrc'
            },
            files: [
                './app/views/**/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
