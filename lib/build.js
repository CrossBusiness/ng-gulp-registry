var replace = require('gulp-replace');

// Build HTML for distribution.
gulp.task('buildhtml', function () {
  gulp.src(global.paths.html)
    .pipe(replace('css/app.css', 'app.min.css'))
    .pipe(replace('lib/system.js', 'app.min.js'))
    .pipe(replace('<script src="config.js"></script>', ''))
    .pipe(replace("<script>System.import('./js/app')</script>", ''))
    .pipe(minifyHtml())
    .pipe(gulp.dest(global.paths.dist));
});


//https://github.com/OrKoN/jspm-ember-playground/blob/master/gulpfile.js#L38


/*
You then include dependency-bundle.js at the top of the page, and you'll only be loading your own application code
as separate files in the browser.
 */


//jspm bundle app/**/* - [app/**/*] dependency-bundle.js

//And with --inject, you don't even need to include your script manually:

//jspm bundle app/**/* - [app/**/*] dependency-bundle.js --inject
//https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md
