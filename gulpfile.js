'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('*.scss')
      .pipe(sass({
          outputStyle: 'nested',
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('./'))
      .pipe(browserSync.stream());
});

gulp.task('serve', ['css'], function() {
  browserSync.init({
    server: './'
  });

  gulp.watch('*.scss', ['css']);
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);