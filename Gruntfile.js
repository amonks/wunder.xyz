module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'clean': {
      build: {
        src: ["build", "dist"]
      }
    },

    'copy': {
      pub: {
        files: [
          {
            cwd: 'pub',
            src: '**/*',
            dest: 'build',
            expand: true
          },
        ]
      },
      bower: {
        files: [
          {
            src: 'bower_components/requirejs/require.js',
            dest: 'build/js/require.js'
          },
          {
            src: 'bower_components/require-cs/cs.js',
            dest: 'build/js/cs/cs.js'
          },
          {
            src: 'bower_components/purl/purl.js',
            dest: 'build/js/vendor/purl.js'
          },
          {
            src: 'bower_components/coffeescript/extras/coffee-script.js',
            dest: 'build/js/coffee-script/coffee-script.js'
          }
        ]
      },
      js: {
        files: [
          {
            cwd: 'src/js',
            src: '**/*',
            dest: 'build/js',
            expand: true
          },
        ]
      },
    },

    'jade': {
      compile: {
        options: {
          pretty: true
        },
        files: [
          { "build/index.html": "src/jade/index.jade" },
          { "build/info.html": "src/jade/info.jade" }
        ]
      }
    },

    'stylus': {
      compile: {
        options: {
          compress: false
        },
        files: {
          "build/style.css": "src/stylus/style.styl",
        }
      }
    },

    'requirejs': {
      compile: {
        options: {
          allowSourceOverwrites: true,
          appDir: "build",
          baseUrl: "build/js",
          dir: "dist",
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
  });



  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');


  grunt.registerTask('cleanup', [
    'clean:build',
  ]);

  grunt.registerTask('build', [
    'cleanup',
    'copy:bower',
    'copy:pub',
    'copy:js',
    'jade:compile',
    'stylus:compile',
  ]);

  grunt.registerTask('dist', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
