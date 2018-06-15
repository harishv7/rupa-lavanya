// including plugins
var gulp = require('gulp'), 
	uglify = require("gulp-uglify"),
	minifyCss = require("gulp-clean-css"),
	sass = require('gulp-sass');

// minify js
gulp.task('minify-js', function () {
	gulp.src('./assets/js/*.js') // path to your files
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/minified'));
});

// minify css
gulp.task('minify-css', function () {
	gulp.src('./assets/css/*.css') // path to your file
		.pipe(minifyCss())
		.pipe(gulp.dest('assets/css/minified'));
});

gulp.task('sass', function () {
	return gulp.src('./assets/css/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('watch-all', function () {
	gulp.watch('./assets/js/*.js', ['minify-js']);
	gulp.watch('./assets/css/*.css', ['minify-css']);
	gulp.watch('./assets/css/*.sass', ['sass']);
});

// default gulp task - just run gulp in command line
gulp.task('default', ['minify-js', 'sass', 'watch-all'], function() {
});