import gpdeploy from 'gulp-gh-pages';

function deploy(gulp) {
  return gulp.src(this.src)
    //.pipe(gpdeploy());
}

deploy.description = 'gitHub pages deploy task';

export default deploy

