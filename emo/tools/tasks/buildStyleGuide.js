/*jshint node:true, laxbreak:true */
'use strict';

module.exports = function(grunt) {
    var pkg = require('../../package.json');

    grunt.config.merge({
        emo: {
            main: {
                options: {
                    scrape: [
                        'src/assets/scss/**/*.scss',
                        'src/assets/scripts/**/*.js',
                        'web/index.html'
                    ],
                    categories: [
                        'content',
                        'landmarks',
                        'layout',
                        'modules',
                        'components'
                    ],
                    title: 'Allstate Style Guide',
                    delimiters: ['{%', '%}']
                },
                files: [
                    {
                        expand: true,
                        cwd: '_styleguide/assets/',
                        src: ['**'],
                        dest: 'docs/styleguide/assets/'
                    },
                    {
                        expand: true,
                        cwd: 'web/assets/',
                        src: ['**'],
                        dest: 'docs/styleguide/assets/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('buildStyleGuide',
        ['emo']
    );
};
