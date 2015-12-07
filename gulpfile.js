var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');

var paths = {
    ts: ['typings/**/*.ts', 'src/**/*.ts'],
    scripts: ['src/**/*.js'],
    templates: ['src/**/*.html'],
    styles: ['src/**/*.css']
};

gulp.task('serve',['clean','tsc','scripts','styles','templates'], function () {
    gulp.watch(paths.ts, ['tsc']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.templates, ['templates']);
});

gulp.task('clean', function() {
    return gulp.src('build',{read:false})
        .pipe(clean());
});

gulp.task('tsc', function () {
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
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function () {
    return gulp.src(paths.styles)
        .pipe(gulp.dest('build'));
})

gulp.task('templates', function () {
    return gulp.src(paths.templates)
        .pipe(gulp.dest('build'));
});