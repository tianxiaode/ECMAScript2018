var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['src/*.html'],
    test:['src/test.js']
};

gulp.task('copyHtml', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('copyTest', function () {
    return gulp.src(paths.test)
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['copyHtml','copyTest'], function () {
    return browserify({
        basedir: '.',
        debug: false,
        entries: ['src/index.js'],
        cache: {},
        packageCache: {}
    })
    .transform('babelify', {
        presets: ['env'],
        extensions: ['.js']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});