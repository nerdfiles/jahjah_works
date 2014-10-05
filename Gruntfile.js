module.exports = function (grunt) {
    'use strict';
    var config = {
      'app': 'app',
      'dist': 'dist',
      'build': 'build'
    };
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        yeoman: config,

        banner: ' /*! <%= pkg.name %> - v<%= pkg.version %> -' +
                ' <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' <%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= pkg.license %> */\n' ,

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [
                  'jahjah_works/_themes/jahjah/_assets/js/global.js'
                ],
                dest: 'jahjah_works/_themes/jahjah/_assets/js/dist/jahjah_works.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'jahjah_works/_themes/jahjah/_assets/js/dist/jahjah_works.min.js'
            }
        },

        jshint: {
            options: {
              node: true,
              curly: true,
              eqeqeq: true,
              immed: true,
              latedef: false,
              newcap: true,
              noarg: true,
              sub: true,
              undef: true,
              unused: true,
              eqnull: true,
              browser: true,
              globals: { jQuery: true },
              boss: true
            },
            gruntfile: {
              src: [
                'Gruntfile.js'
              ]
            },
            lib_test: {
              src: [
                'jahjah_works/_themes/jahjah/_assets/js/global.js'
                //'test/**/*.js'
              ]
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        watch: {
            gruntfile: {
              files: '<%= jshint.gruntfile.src %>',
              tasks: [
                'jshint:gruntfile', 'shell:jangyCollectStatic'
              ]
            },
            /*
             *lib_scss: {
             *  files: '<%= compass.srcDir %>',
             *  tasks: [
             *    'shell:compassWatch'
             *  ]
             *},
             */
            lib_test: {
              files: '<%= jshint.lib_test.src %>',
              tasks: [
                'jshint:lib_test',
                'shell:jangyCollectStatic'
                //'qunit'
              ]
            }
        },

        shell: {
            compassWatch: {
              command: 'compass watch compass',
              options: {
                async: true,
                execOptions: {
                  cwd: './jahjah_works/_themes/jahjah/_assets/css'
                }
              }
            },
            // @note Call python directly in case pyenv cannot be loaded into
            // node environment.
            jangyCollectStatic: {
              command: '/Users/nerdfiles/.pyenv/versions/jahjah_works/bin/python manage.py collectstatic --noinput',
              options: {
                async: false
              }
            },
            jangyRun: {
              command: '/Users/nerdfiles/.pyenv/versions/jahjah_works/bin/python manage.py runserver_plus',
              options: {
                async: true,
                execOptions: { detached: true }
             }
            },
            options: {
              stdout: true,
              stderr: true,
              failOnError: true
            }
        },

        compass: {
          srcDir: 'jahjah_works/_themes/jahjah/_assets/css/compass/sass',
          dist: {
            options: {
              importPath: 'jahjah_works/_themes/jahjah/_assets/vendor/foundation/scss',
              sassDir: 'jahjah_works/_themes/jahjah/_assets/css/compass/sass',
              cssDir: 'jahjah_works/_themes/jahjah/_assets/css/compass/stylesheets',
              environment: 'production'
            }
          }
        },

        exit: {
          normal: {
          }
        }

    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-exit');

    // Default task
    grunt.registerTask('default', [
      'jshint',
      //'qunit',
      'concat',
      'uglify',
      'shell:compassWatch',
      //'shell:jangyRun',
      'watch'
    ]);
};

