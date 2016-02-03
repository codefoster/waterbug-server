// var path = require('path');
// var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var browserSync = require('browser-sync');

// gulp.task('buildServer', function () {
//     var tsProject = ts.createProject('tsconfig.json');
//     return gulp.src(path.resolve('./server/**/*.ts'))
//         .pipe(ts(tsProject))
//         //.js
//         //.pipe(gulp.dest('.'))
// });

// gulp.task('buildClient', function () {
//     var tsProject = ts.createProject('tsconfig.json');
//     return gulp.src(path.resolve('./client/**/*.ts'))
//         .pipe(ts(tsProject))
//         //.js
//         //.pipe(gulp.dest('.'))
// });

// gulp.task('build',['buildServer','buildClient']);

//GULP 4
var gulp = require('gulp');
var notify = require('gulp-notify');
var nodemon = require('gulp-nodemon');
var typescript = require('gulp-typescript');
var livereload = require('gulp-livereload');
var tsProject = typescript.createProject('tsconfig.json', { declaration: false });

gulp.task('tsc', function () {
    var tsResult = gulp.src(['client/**/*'])
        .pipe(typescript(tsProject))

    return tsResult.js.pipe(gulp.dest('client'));
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch(['client/**/*.ts'], gulp.series(['tsc',function(){ console.log('executing livereload...'); livereload.reload(); }]));

    nodemon({
        script: './server/server.js',
        tasks: ['client'],
        ext: 'ts html css',
        ignore:['client/','.vscode/','node_modules/','typings/','gulpfile.js','package.json','tsconfig.json']
    }).on('restart', function () {
        console.log('in restart event');
        gulp.src('./server/server.js')
            .pipe(livereload.reload())
            .pipe(notify('Server restarted, reloading page...'));
    });

});

gulp.task('default', gulp.series(['tsc', 'watch']), function () {
    
});
