var path = require('path');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');

gulp.task('buildServer', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(path.resolve('./server/**/*.ts'))
        .pipe(ts(tsProject))
        //.js
        //.pipe(gulp.dest('.'))
});

gulp.task('buildClient', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return gulp.src(path.resolve('./client/**/*.ts'))
        .pipe(ts(tsProject))
        //.js
        //.pipe(gulp.dest('.'))
});

gulp.task('build',['buildServer','buildClient']);