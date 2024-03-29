
var { src, series, dest, watch } = require('gulp');

var sourcemaps = require('gulp-sourcemaps');

var { init, reload } = require('browser-sync').create();

var concat = require('gulp-concat');
var terser = require('gulp-terser');
var sass = require('gulp-sass');
// var stylus = require('gulp-stylus');
var htmlmin = require('gulp-htmlmin');

// Task para stylus
// function stylusTask () {
//   return src('./src/**/**/*.kcl-style.min.css')
//     .pipe(stylus({compress: true}))
//     .pipe(concat('styl.css'))
//     .pipe(dest('./deploy/src/css/component'))
// }

function sassTask () {
  return src('./src/**/**/*.scss')
    .pipe(concat('style.min.css'))  
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./deploy/src/css/'))
}

function jsTask () {
  return src('./src/**/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('index.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./deploy/src/js/'))
}

function htmlTask () {
  return src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./deploy/'))
}

function imgTask () {
  return (
    src('./src/img/**/*.svg') 
    .pipe(dest('./deploy/src/img/')),
    src('./src/img/**/*.png')
    .pipe(dest('./deploy/src/img/')),
    src('./src/img/**/*.webp')
    .pipe(dest('./deploy/src/img/'))
    )
}

function listen() {
  init({
    server: {
      baseDir: './deploy/'
    }
  });
  watch('./src/**/**/*.scss', sassTask)
  // watch('./src/**/**/*.styl', stylusTask)
  watch('./src/**/**/*.js', jsTask)
  watch('./index.html', htmlTask)
  watch('./deploy/src/css/*.css').on('change', reload)
  watch('./deploy/src/js/*.js').on('change', reload)
  watch('./*.html').on('change', reload)
}

exports.listen = listen;
exports.jsTask = jsTask;
exports.sassTask = sassTask;
exports.htmlTask = htmlTask;
exports.imgTask= imgTask;
// exports.stylusTask= stylusTask;
exports.default = series(jsTask, sassTask, listen, imgTask);
exports.build = series(jsTask, sassTask, htmlTask, imgTask);