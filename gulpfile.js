var gulp = require('gulp');
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var uglyconcat = require('gulp-uglifyjs');
var gzip = require('gulp-gzip');

var assets = 'assets/';
var components = assets + 'components/';
var app = assets + 'app/';
var destination = 'public/assets/';

var paths = {

    less: assets + 'less/app.less',
    less_destination: destination + 'css',

    less_per_page: assets + 'less/pages/**/*.less',
    less_per_page_destination: destination + 'css/pages',

    fonts: components + 'bootstrap/fonts/*',
    fonts_destination: destination + 'fonts',

    js: [
        assets + 'js/app.js',
        components + 'jquery/dist/jquery.js',
        components + 'bootstrap/js/transition.js',
        components + 'bootstrap/js/alert.js',
        components + 'bootstrap/js/modal.js',
        components + 'bootstrap/js/dropdown.js',
        components + 'bootstrap/js/scrollspy.js',
        components + 'bootstrap/js/tab.js',
        components + 'bootstrap/js/tooltip.js',
        components + 'bootstrap/js/popover.js',
        components + 'bootstrap/js/button.js',
        components + 'bootstrap/js/collapse.js',
        components + 'bootstrap/js/carousel.js',
        components + 'bootstrap/js/affix.js'
    ],
    js_destination: destination + 'js',

    js_per_page: assets + 'js/pages/**/*.js',
    js_per_page_destination: destination + 'js/pages'

};

gulp.task('less', function() {
    return gulp.src(paths.less)
        .pipe(less({
            compress: true,
            paths: [components + 'bootstrap/less']
        }))
        .pipe(prefixer('last 10 version'))
        .pipe(gulp.dest(paths.less_destination))
        .pipe(gzip({threshold: true, gzipOptions: {level: 9}}))
        .pipe(gulp.dest(paths.less_destination));
});

gulp.task('less-per-page', function() {
    return gulp.src(paths.less_per_page)
        .pipe(less({compress: true}))
        .pipe(gulp.dest(paths.less_per_page_destination))
        .pipe(gzip({threshold: true, gzipOptions: {level: 9}}))
        .pipe(gulp.dest(paths.less_per_page_destination));
});

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(paths.fonts_destination));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(uglyconcat())
        .pipe(gulp.dest(paths.js_destination))
        .pipe(gzip({threshold: true, gzipOptions: {level: 9}}))
        .pipe(gulp.dest(paths.js_destination));
});

gulp.task('js-per-page', function() {
    return gulp.src(paths.js_per_page)
        .pipe(uglify())
        .pipe(gulp.dest(paths.js_per_page_destination))
        .pipe(gzip({threshold: true, gzipOptions: {level: 9}}))
        .pipe(gulp.dest(paths.js_per_page_destination));
});

gulp.task('default',
    [
        'less',
        'less-per-page',
        'fonts',
        'js',
        'js-per-page'
    ]
);

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.less_per_page, ['less-per-page']);
    gulp.watch(paths.fonts, ['fonts']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.js_per_page, ['js-per-page']);
});
