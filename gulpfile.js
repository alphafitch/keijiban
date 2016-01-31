var gulp = require('gulp'),
    zip = require('gulp-zip'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// default gulp task
gulp.task('default', ['zip'], function() {

});

gulp.task('zip', ['uglify'], function() {
  return gulp.src('dist/*')
    .pipe(zip('keijiban.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});