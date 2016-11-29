var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    csscomb = require('gulp-csscomb'),
    rimraf = require("rimraf"),
    rigger = require('gulp-rigger'),
    defineModule = require('gulp-define-module'),
    template = require('gulp-template'),
    sourcemaps = require('gulp-sourcemaps');

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "frontend"
};

build = {
    html: './build/',
    css: './build/css/',
    img: './build/img/',
    js: "./build/js/",
    data: "./build/data"
};

dev = {
    html: './dev/**/*.html',
    htmlMain: './dev/index.html',
    sass: './dev/sass/**/*.scss',
    sassSrc: './dev/scss',
    sassMain: './dev/sass/style.scss',
    img: './dev/img/**/*.*',
    data: './dev/data/**/*.*',
    js: "./dev/js/**/*.js"
};

gulp.task('html', function () {
    gulp.src(dev.htmlMain)
        .pipe(rigger())
        .pipe(gulp.dest(build.html))
        .pipe(reload({stream: true}));
});

gulp.task('data', function () {
    gulp.src(dev.data)
        .pipe(rigger())
        .pipe(gulp.dest(build.data))
        .pipe(reload({stream: true}));
});

gulp.task('img', function () {
    gulp.src(dev.img)
        .pipe(gulp.dest(build.img))
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src(dev.js)
        .pipe(gulp.dest(build.js))
        .pipe(reload({stream: true}));
});

gulp.task('sass', function () {
    gulp.src(dev.sassMain)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename(function (path) {
            path.basename = "styles";
            path.extname = ".css";
        }))
        .pipe(gulp.dest(build.css))
        .pipe(reload({stream: true}));
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('cssComb', function () {
    gulp.src([dev.sass, dev.sassIgnore])
        .pipe(csscomb())
        .pipe(gulp.dest(dev.sassSrc));
});

gulp.task('clean', function (cb) {
    rimraf(build.html, cb);
});

gulp.task('build', [
    'html',
    'img',
    'sass',
    'js',
    'data'
]);

gulp.task('watch', function () {
    watch([dev.html], function (event, cb) {
        gulp.start('html');
    });
    watch([dev.data], function (event, cb) {
        gulp.start('data');
    });
    watch([dev.sass], function (event, cb) {
        gulp.start('sass');
    });
    watch([dev.img], function (event, cb) {
        gulp.start('img');
    });
    watch([dev.js], function (event, cb) {
        gulp.start('js');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);