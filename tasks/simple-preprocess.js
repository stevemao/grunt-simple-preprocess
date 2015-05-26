'use strict';
var chalk = require('chalk');
var extname = require('path').extname;
var simplePreprocess = require('simple-preprocess');

module.exports = function(grunt) {
  grunt.registerMultiTask('simplePreprocess', 'Preprocess html, js and css based off environment configuration', function() {
    var files = this.files;
    var opts = this.options();
    var env = this.data.env || opts.env || this.target;

    files.forEach(function(file) {
      var fileSrc = file.src;
      var type = opts.type;

      if (fileSrc.length > 1) {
        grunt.log.warn('Only one src per dest is supported. The first file is used');
      }

      var src = fileSrc[0];
      var dest = file.dest || src;
      type = type || extname(src).replace('.', '');

      var data = grunt.file.read(src);
      var result = simplePreprocess(data, type, env);

      var retained = result.retained;
      var stripped = result.stripped;
      var retainedCount = retained.length;
      var strippedCount = stripped.length;

      if (retainedCount > 0 || strippedCount > 0) {
        retained.forEach(function(code) {
          grunt.verbose.writeln(chalk.green(code) + chalk.cyan('retained'));
        });

        stripped.forEach(function(code) {
          grunt.verbose.writeln(chalk.red(code) + chalk.magenta('stripped'));
        });

        grunt.verbose.writeln(dest + ': ' + chalk.green('✔ ') + retainedCount + ' blocks retained.');
        grunt.verbose.writeln(chalk.red('✖ ') + strippedCount + ' blocks stripped.');
      }

      grunt.file.write(dest, result.data);
    });

    var tally = files.length;
    grunt.log.write('Processed ' + chalk.cyan(tally) + (tally === 1 ? ' file' : ' files'));
    grunt.log.writeln();
  });
};
