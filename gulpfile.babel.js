import gulp from 'gulp';
import NgGulpRegistry from  '.';

//gulp.registry(new NgGulpRegistry({build: {src:'ddd'}}));

gulp.registry(new NgGulpRegistry());


gulp.task('default', gulp.series(
    'clean',
    'deploy'
));

//gulp.task('default', gulp.series(
//  'clean',
//  gulp.parallel('scripts', 'images')
//));
//
//function watch() {
//  gulp.watch(paths.scripts, 'scripts');
//  gulp.watch(paths.images, 'images');
//}
//
//gulp.task(watch);
