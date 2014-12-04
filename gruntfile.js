module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    BASE_PATH: '',
    DEVELOPMENT_PATH: '',

    yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    extension: '.js',                               
                    paths: '<%= DEVELOPMENT_PATH %>' + 'plugins/',
                    outdir: '<%= BASE_PATH %>' + 'docs/'
                }
            }
        },

    uglify: {
            build: {
                files: {
                'plugins/gamepad-plugin-<%= pkg.version %>.min.js': ['plugins/gamepad-plugin-<%= pkg.version %>.js']
            }
        }
    },
 
    copy: {

        whole: {
          src: ['plugins/**', 'examples/**', 'docs/**', 'assets/**', 'lib/**', 'README.md'],
          dest: 'dist/<%= pkg.name %>-<%= pkg.version %>/'
        }

    }
 

 });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-copy');

  
  
  
  grunt.registerTask("default", ["uglify:build"]);
  grunt.registerTask("full", ["uglify:build","yuidoc:compile","copy:whole"]);
  
  

};