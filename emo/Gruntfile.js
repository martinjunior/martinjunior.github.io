module.exports = function(grunt) {

    grunt.initConfig({

        emo: {
            app: {
                options: {
                    components: [
                        'styleguide/src/assets/less/**/*.less',
                        'styleguide/src/assets/less/**/*.md',
                        'docs/*.md'
                    ],
                    views: 'views'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'styleguide/src/',
                        src: [
                            'assets/styles/*.css'
                        ],
                        dest: 'styleguide/dest/'
                    }
                ]
            }
        },

        less: {
            app: {
                options: {
                    compress: true
                },
                files: {
                    'styleguide/dest/assets/styles/app.css': 'styleguide/src/assets/less/app.less'
                }
            }
        },

        watch: {
            app: {
                files: [
                    'src/**',
                    'styleguide/src/**'
                ],
                tasks: ['default'],
            }
        }

    });

    grunt.loadNpmTasks('grunt-emo');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'less',
        'emo'
    ]);

};