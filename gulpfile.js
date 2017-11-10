let gulp = require('gulp');
gulp.task('default',()=>{

    gulp.src('es6/**/*.js')
        .pipe(gulp.dest('dist'))
})