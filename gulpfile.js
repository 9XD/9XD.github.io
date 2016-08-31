//참고: https://gist.github.com/dope/071dc7741f6ab2c77116#file-gulpfile-js

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var less         = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS    = require('gulp-minify-css');
var notify       = require('gulp-notify');
var gutil        = require('gulp-util');
var cp           = require('child_process');
var path         = require('path');
var uglify       = require('gulp-uglify');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};
var reload = browserSync.reload;

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['less', 'jekyll-build'], function() {
    browserSync({
        notify: true,
        logPrefix: "[Browser Sync]",
        server: {
            baseDir: '_site'
        }
    });
});

// minifiy js
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/min'))
});

// minifiy images
gulp.task('images', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('less', function () {
  gulp.src('static/less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(less({compress: true}).on('error', gutil.log))
    .pipe(less().on('error', gutil.log))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest('static/css'))
    .pipe(gulp.dest('_site/static/css'))
    .pipe(notify('Less Compiled, Prefixed and Minified'));
});

gulp.task('watch', function () {
    gulp.watch('static/less/*.less', ['less', reload]);
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*.md', 'static/js/**/*', 'static/img/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);