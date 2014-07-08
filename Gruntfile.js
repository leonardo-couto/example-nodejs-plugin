module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      src: 'src/main/javascript',
      dest: 'target/example/js',
      test: 'src/test/javascript'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= dirs.dest %>/<%= pkg.name %>.js',
        dest: '<%= dirs.dest %>/<%= pkg.name %>.min.js'
      }
    },
    concat: {
      build: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
              src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          }
        },
        files: [{
            src: ['<%= dirs.src %>/*.js'], 
            dest: '<%= dirs.dest %>/<%= pkg.name %>.js',
            nonull: true
          }
        ]
      },
      lib: {
        files: [{
            src: ['<%= dirs.src %>/lib/jquery.js'],
            dest: '<%= dirs.dest %>/lib/jquery.js',
            nonull: true
          }
        ]
      }
    },
    jshint: {
      all: ['<%= dirs.src %>/*.js']
    },
    karma: {
      unit: {
        options: {
          frameworks: ['qunit'],
          plugins: [
            'karma-qunit',
            'karma-phantomjs-launcher'
          ],
          files: [
            '<%= dirs.src %>/lib/*.js',
            '<%= dirs.dest %>/<%= pkg.name %>.js',
            '<%= dirs.test %>/*.js'],
          browsers: ['PhantomJS'],
          singleRun: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'karma']);

};
