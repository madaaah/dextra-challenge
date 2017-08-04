'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('livereload', function (){
  gulp.src('./*')
  .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch('./*', ['livereload']);
  gulp.watch('./css/*', ['livereload']);
  gulp.watch('./src/sass/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
