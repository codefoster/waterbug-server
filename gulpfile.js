var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');

var paths = {
    ts: ['typings/**/*.ts', 'src/**/*.ts'],
    scripts: ['src/**/*.js'],
    templates: ['src/**/*.html'],
    styles: ['src/**/*.css']
};

var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('serve', ['browser-sync'], function () {
    gulp.watch(paths.ts, ['typescript-compile']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.templates, ['templates']);
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync({ proxy: 'http://localhost:8080', port:8080 });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'server.js',
        watch: ['server.js']
    })
        .on('start', function onStart() {
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            setTimeout(function reload() {
                browserSync.reload({
                    stream: false
                });
            }, BROWSER_SYNC_RELOAD_DELAY);
        });
});

gulp.task('typescript-compile', function () {
    return gulp.src(paths.ts)
        .pipe(ts({
            'module': 'commonjs',
            'experimentalDecorators': true,
            'emitDecoratorMetadata': true,
            'target': 'ES5'
        })).js
        .pipe(gulp.dest('build'));
});

gulp.task('scripts', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload());
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload());
});