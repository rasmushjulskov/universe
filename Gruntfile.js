module.exports = function(grunt) {


  // Project configuration ---------------------------------------- //
  grunt.initConfig({

    // Read configuration info from the package.json file --------- //
    pkg: grunt.file.readJSON('package.json'),

    // Watch files for changes and run tasks ---------------------- //
    watch: {
      css: {
        files: ['universe/client/stylesheets/**/*.scss'],
        tasks: ['compass']
      }
    },
      
    compass: {
      default: {
        options: {
          bundleExec: true,
        }
      }
    }
  });


  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);
  //grunt.registerTask('server', ['connect', 'watch']);
};