var gulp = require('gulp');
var zip = require('gulp-zip');
var minify = require('gulp-minify');

// default gulp task
gulp.task('default', ['zip'], function() {

});

gulp.task('zip', ['minify'], function() {
  return gulp.src('dist/*')
    .pipe(zip('keijiban.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
  return gulp.src('app/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'));
});
