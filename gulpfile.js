var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');

gulp.task('css', function () {

	var processors = [
		pxtoviewport({
			viewportWidth: 375,
		})
	];

	return gulp.src(['public/render/report/layout.css'])
		.pipe(postcss(processors))
		.pipe(gulp.dest('public/render/report/css/'));
});
