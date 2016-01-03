var gulp = require('gulp');
var zip = require('gulp-zip');

// default gulp task
gulp.task('default', ['dist'], function() {
  
});

gulp.task('dist', function() {
  return gulp.src('dist/*')
    .pipe(zip('keijiban.zip'))
    .pipe(gulp.dest('dist'));
});
