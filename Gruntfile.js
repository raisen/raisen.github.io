module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jekyll: {
      dist: {
        options: {
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      },
      serve: {
        options: {
          serve: true,
          dest: '.jekyll',
          drafts: true,
          future: true
        }
      }
    },
    bower_concat: {
      all: {
        dest: "js/bower.js",
        cssDest: "css/bower.css",
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};