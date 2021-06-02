const gulp = require('gulp');


function pug2html(cb) {
    return gulp.src('dev/pug/pages/*.pug') // путь к файлам, которые будем обрабатывать
        .pipe(dest('output/'));
}

exports.default = gulp.series();