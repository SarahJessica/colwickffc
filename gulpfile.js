var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var scss = require('gulp-sass');

var jsFiles = ['*.js', 'src/**/*.js'];
var scssFiles = ['*.scss', 'src/**/*.scss'];


// CONSISTENT CODING STYLE
gulp.task('style', function(){
  gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
        verbose : true
    }))
    .pipe(jscs());
});

// CSS
gulp.task('scss', function(){
  gulp.src(scssFiles)
    .pipe(scss().on('error', scss.logError))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', function(){});
