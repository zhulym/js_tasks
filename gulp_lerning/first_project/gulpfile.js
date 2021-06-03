const gulp = require('gulp');
const del = require('del');
const gulpPug = require('gulp-pug'); //обработчик для пагов
const gulpSass = require('gulp-sass');
const gulpPlumber = require('gulp-plumber'); // пакет укажет ошибку, и запустит сборку, без него при ошибке сборщик не сработае
const gulpBabel = require('gulp-babel');
const gulpUglify = require('gulp-uglify');
const gulpAutoprefixer = require('gulp-autoprefixer'); //расставит префиксы для стилей по разные браузеры (какие конкретно тоже настраиваем в package.json)
const gulpCleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();


function clean() {
    return del('dist');
}

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
        .pipe(gulpSass())                           // обр. scss в css
        .pipe(gulpCleanCss({ level: 2 }))                       // удаляет пробелы и миниф css                
        .pipe(gulpAutoprefixer())
        .pipe(gulpPlumber.stop())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/static/css'));
}

function script() {
    return gulp.src('dev/static/js/main.js')  // только один файл указывать
        .pipe(gulpBabel({
            presets: ['@babel/env']
        }))
        .pipe(gulpUglify())                  // минифицирует джс файл               
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/static/js'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
    gulp.watch("dev/pug/**/*.pug", pug2html);               //следим за обн. пагов
    gulp.watch("dev/static/styles/**/*.scss", scss2css);    //следим за обн. сцсс
    gulp.watch("dev/static/js/main.js", script);            // сдедим за обн. js

    gulp.watch("dist/*.html").on('change', browserSync.reload);
}


exports.default = gulp.series(clean, pug2html, scss2css, script, watch);