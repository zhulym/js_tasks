const gulp = require('gulp');
const del = require('del');
const gulpPug = require('gulp-pug');
const gulpSass = require('gulp-sass');
const gulpPlumber = require('gulp-plumber');
const gulpBabel = require('gulp-babel');
const gulpUglify = require('gulp-uglify');
const gulpAutoprefixer = require('gulp-autoprefixer');
const gulpCleanCss = require('gulp-clean-css');
const gulImageMin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const conCat = require('gulp-concat');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();

let isBuildFlag = false;

function clean() {
    return del('dist');
}

function fonts() {
    return gulp.src('dev/static/fonts/**/*.*')
        .pipe(gulp.dest('dist/static/fonts'));
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
    return gulp.src('dev/static/styles/style.scss')
        .pipe(gulpPlumber())
        .pipe(gulpSass())
        .pipe(gulpCleanCss({ level: 2 }))
        .pipe(gulpAutoprefixer())
        .pipe(gulpPlumber.stop())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/static/css'));
}

function script() {
    return gulp.src('dev/static/js/main.js')
        .pipe(gulpBabel({
            presets: ['@babel/env']
        }))
        .pipe(gulpIf(isBuildFlag, gulpUglify()))
        .pipe(browserSync.stream())
        .pipe(gulp.dest('dist/static/js'));
}

function copyJquery() {
    return gulp.src('dev/static/js/libs/jquery-3.6.0.min.js')
        .pipe(gulp.dest('dist/static/js/libs'));
}

function libs() {
    return gulp.src('node_modules/slick-carousel/slick/slick.min.js')
        .pipe(conCat('libs.js'))
        .pipe(gulp.dest('dist/static/js/libs'));
}

function imageMin() {
    return gulp.src([
        'dev/static/images/**/*.{jpg, gif, png, svg}',
        '!dev/static/images/sprite/*'
    ])
        .pipe(gulImageMin([
            gulImageMin.gifsicle({ interlaced: true }),
            gulImageMin.mozjpeg({ quality: 75, progressive: true }),
            gulImageMin.optipng({ optimizationLevel: 5 }),
            gulImageMin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/static/images'));
}

function svgSpriteBuild() {
    return gulp.src('dev/static/images/sprite/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('dist/static/images/sprite'));
}

function setMode(isBuild) {
    return cb => {
        isBuildFlag = isBuild;
        cb();
    }
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
    gulp.watch("[dev/static/images/**/*.{jpg, gif, png, svg}, !dev/static/images/sprite/*]", imageMin);            // сдедим за обн. images
    gulp.watch("dev/static/images/sprite/*", svgSpriteBuild);            // сдедим за обн. svg

    gulp.watch("dist/*.html").on('change', browserSync.reload);
}

const dev = gulp.parallel(fonts, pug2html, scss2css, imageMin, svgSpriteBuild, script, copyJquery, libs)
exports.default = gulp.series(clean, dev, watch);
exports.build = gulp.series(clean, setMode(true), dev);