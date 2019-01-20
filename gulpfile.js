//test1.html
// var gulp = require('gulp');
// var inlinesource = require('gulp-inline-source');

// gulp.task('inlinesource', function () {
//     return gulp.src('./src/html/*.html')
//         .pipe(inlinesource())
//         .pipe(gulp.dest('./out'));
// });

//test2.html
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var del = require('del');
var inlinesource = require('gulp-inline-source');

gulp.task('clean-js', function () {
  return del([
    'build/js/*.js'
  ]);
});

gulp.task('clean-css', function () {
  return del([
    'build/css/*.css'
  ]);
});

function cleanout() {
    return del([
        'build/css/*.css',
        'build/js/*.js',
      'build/out/*.*'
    ]);
}

function packJS() {  
  return gulp.src(['src/assets/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('build/js'))
}

function packCSS() {  
  return gulp.src(['src/assets/css/*.css'])
    .pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'));
}

function inlineAll() {  
    return gulp.src(['src/html/*.html'])
    .pipe(inlinesource())
      .pipe(gulp.dest('build/out'));
  }


const build = gulp.series(cleanout, gulp.parallel(packJS, packCSS), inlineAll); 

exports.build = build;
exports.default = build;