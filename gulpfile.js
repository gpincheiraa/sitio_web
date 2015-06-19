'use strict';

var gulp  = require('gulp'),
  connect = require('gulp-connect'),
  historyApiFallback = require('connect-history-api-fallback'),
  inject  = require('gulp-inject'),
  bowerFiles = require('main-bower-files'),
  jshint  = require('gulp-jshint'),
  minify  = require('gulp-minify-css'),
  rimraf  = require('gulp-rimraf'),
  uglify  = require('gulp-uglify');
  

//Global variable content the config of the application
var _CONFIG = {
  index_target:'./index.html',
  sources: ['app/**/*.js', 'app/**/*.css','css/**/*.css']
};

//Default task called from the command 'gulp'
gulp.task('default', ['inject', 'watch']);

//watch the changes on directories where we create files.
gulp.task('watch', watchFn);

function watchFn() {
  gulp.watch(_CONFIG.sources,['inject']);
}


// Task for inject css and js files created for us and bower front-end libraries installed.
gulp.task('inject', injectFn);

function injectFn(){

  var target = gulp.src(_CONFIG.index_target);
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(_CONFIG.sources, {read: false});
  // , ignorePath: "/app"
  return target
    .pipe(inject(sources, {addRootSlash: false}))
    .pipe(inject(
      gulp.src(
        bowerFiles(),
        {read: false}
      ),
      {name: 'bower', addRootSlash: false}
    ))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
}






