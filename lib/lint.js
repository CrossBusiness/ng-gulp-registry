import gulp from 'gulp';
import paths from '../paths';
import eslint from 'gulp-eslint';

gulp.task('lint-js', () => {
  return gulp.src(paths.es6)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});



