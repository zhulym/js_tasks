const gulp = require('gulp');
const gulpPug = require('gulp-pug'); //обработчик для пагов
const gulpSass = require('gulp-sass');
const gulpPlumber = require('gulp-plumber'); // пакет укажет ошибку, и запустит сборку, без него при ошибке сборщик не сработает
const gulpAutoprefixer = require('gulp-autoprefixer'); //расставит префиксы для стилей по разные браузеры (какие конкретно тоже настраиваем в package.json)
const gulpCleanCss = require('gulp-clean-css');


function pug2html() {
    return gulp.src('dev/pug/pages/*.pug') // путь к файлам, которые будем обрабатывать
        .pipe(gulpPlumber())                     //  прикручиваем обработчик ошибок !!!!ниже останавливаем (внутри будут другие пакеты)
        .pipe(gulpPug(                      //  прикручиваем обработчик для пагов
            { pretty: true }                 // объект для настроек, здесь тру html будет без минификации, остальные настройки в доке
        ))
        .pipe(gulpPlumber.stop())         // !!! останавливаем пламбер для более стабильной работы (внутри будут другие пакеты)
        .pipe(gulp.dest('dist'));   // указываем куда будут помещаться обработанные файлы (папка dist)
}

function scss2css() {
    return gulp.src('dev/static/styles/style.scss')  // только один файл указывать
        .pipe(gulpPlumber())
        .pipe(gulpSass())
        .pipe(gulpCleanCss())
        .pipe(gulpAutoprefixer())
        .pipe(gulpPlumber.stop())
        .pipe(gulp.dest('dist/static/css'));
}

exports.default = gulp.series(pug2html, scss2css);