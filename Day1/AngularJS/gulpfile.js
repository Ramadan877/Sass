const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function(){
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(function(file){
            return file.base.replace('assets/sass', 'app');
        }));
});

//Überwachung von Änderungen in den Sass Dateien:
gulp.task('watch', function(){
    gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
});
