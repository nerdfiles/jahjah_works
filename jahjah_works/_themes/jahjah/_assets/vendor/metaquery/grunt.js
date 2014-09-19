module.exports = function(grunt) {
    
  // Project configuration.
  grunt.initConfig({    
    min: {
      dist: {
        src: ['metaquery.js'],
        dest: 'metaquery.min.js'
      },
      
      distjq: {
        src: ['metaquery.jquery.js'],
        dest: 'metaquery.jquery.min.js'
      }
    },
    qunit: {
      all: ['test/*.html']
    },
    lint: {
      files: ['metaquery.js, metaquery.jquery.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        exports: true,
        module: false
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'qunit lint min');

  grunt.registerTask('travis', 'lint qunit');
};
