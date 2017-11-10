var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
gulp.task('default', function () {

    /* Running eslint */

    gulp.src('es6/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());

    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})
