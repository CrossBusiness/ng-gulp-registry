
function watch(gulp, config, bs) {
  gulp.watch(config.get('html.src'), bs.reload);
  gulp.watch(config.get('sass.src'), gulp.series('lint:styles','styles'));
  gulp.watch(config.get('scripts.src'), gulp.series('lint:scripts', 'scripts'));
  gulp.watch(config.get('images.src'), 'images');
}

watch.description = 'watch task';

export default watch
