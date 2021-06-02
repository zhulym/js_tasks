const gulp = require('gulp');
const gulpPug = require('gulp-pug'); //обработчик для пагов


function pug2html(cb) {
    return gulp.src('dev/pug/pages/*.pug') // путь к файлам, которые будем обрабатывать
        .pipe(gulpPug(                      //  прикручиваем обработчик для пагов
            { pretty: true }                 // объект для настроек, здесь тру html будет без минификации, остальные настройки в доке
        ))
        .pipe(gulp.dest('dist'));   // указываем куда будут помещаться обработанные файлы (папка dist)
}

exports.default = gulp.series(pug2html);  // передаём ф-цию 