module.exports = function(grunt) {


  // Project configuration ---------------------------------------- //
  grunt.initConfig({

    // Read configuration info from the package.json file --------- //
    pkg: grunt.file.readJSON('package.json'),

    // Watch files for changes and run tasks ---------------------- //
    watch: {
      css: {
        files: ['css/*.scss'],
        tasks: ['compass']
      }
    },
      
    compass: {
      default: {
        options: {
          bundleExec: true
        }
      },
      options: {
        require: 'susy'
      }
    }
  });


  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass']);
  grunt.registerTask('server', ['watch']);
};