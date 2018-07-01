'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
    console.log('hello');
})

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch("./index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);