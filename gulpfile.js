'use strict';

// Add browser refresh for cshtml files

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    sourcemaps = require('gulp-sourcemaps');
    

gulp.task('default', ['sass', 'watch', 'webserver']);

// gulp.task('sass', function() {
gulp.task('sass', function() {
	gulp.src('./scss/**/*.scss')
		// .pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		// .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'))
		// .pipe(livereload());
});

gulp.task('watch', function() {
	// Watches the scss folder for all .scss and .sass files
	// If any file changes, run the sass task
	gulp.watch('./scss/**/*.scss', ['sass'])
});
  
gulp.task('webserver', function() {
	connect.server({
		livereload: true
	});
});
 

// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(webserver({
//       fallback: 'index.html'
//     //   livereload: true,
//     //   directoryListing: true,
//     //   open: true
//     }));
// });

// gulp.task('scss-lint', function() {
// 	gulp.src('./assets/scss/**/*.scss')
// 		.pipe(scsslint());
// });