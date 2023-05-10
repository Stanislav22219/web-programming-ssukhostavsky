let gulp = require('gulp')

let sass = require('gulp-sass');

gulp.task('sass',function () {
    return gulp.src('.app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
});


let concat = require('gulp-concat');

gulp.task('concat-css', function () {
    return gulp.src('./app/css/**/*.css')
.pipe(concat('styles.css'))
.pipe(gulp.dest('./app/css'))
});


let uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    return gulp.src('./app/js/main.js')
        .pipe(uglify({toplevel: true }))
        .pipe(gulp.dest('./dist/js'))
});


let del = import('del');

gulp.task('clean', function () {
    return del('./dist/*')
});


let rename = require("gulp-rename");

gulp.task('rename', function () {
    return gulp.src('./app/js/main.js')
        .pipe(rename('./app/js/script.js'))
        .pipe(gulp.dest('./dist/js'))
});

let cssnano = require('cssnano');

gulp.task('minify', function() {
    return gulp.src('**/*.css')
        .pipe(gulp.dest('css'));
});


let imagemin = import('gulp-imagemin')

gulp.task('image', function() {
   return gulp.src('src/image')
        .pipe(imagemin())
        .pipe(gulp.dest('image'))
});


let uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
    gulp.src('/**/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./css/'));
});