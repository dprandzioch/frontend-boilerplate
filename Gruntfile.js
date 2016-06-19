/* global module:false */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            coffee: {
                files: [
                    'src/coffeescript/*.coffee',
                    'src/coffeescript/**/*.coffee'
                ],
                tasks: [ 'coffee:compile' ]
            },
            concat: {
                files: [
                    'app/js/app.js',
                ],
                tasks: [ 'concat:dist' ]
            },
            sass: {
                files: [
                    'src/scss/**.scss'
                ],
                tasks: [ 'sass:dist' ]
            }
        },
        sass: {
            dist: {
                options: {
                    trace: true
                },
                files: {
                    'public/css/default.css' : 'src/scss/default.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                   'public/css/default.css': 'public/css/default.css'
                }
            }
        },
        coffee: {
            compile: {
                files: {
                   'public/js/app.js': [ 'src/coffeescript/*.coffee', 'src/coffeescript/**/*.coffee' ]
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['vendor/angular/angular.min.js', 'public/js/app.js'],
                dest: 'public/js/app.js',
            }
        },
        uglify: {
            compiled_app: {
                files: {
                    'public/js/app.js': 'public/js/app.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', [ 'coffee', 'concat', 'sass', 'watch' ]);
    grunt.registerTask('dist', [ 'coffee', 'concat', 'uglify', 'sass', 'cssmin' ]);
};
