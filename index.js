process.env.NODE_CONFIG_DIR = 'gulp/config';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import chalk from 'chalk';
import DefaultRegistry from  'undertaker-registry'
import clean from './lib/clean.js';
import gpdeploy from './lib/gpdeploy.js';
import watch from './lib/watch.js';
import {server, browserSync} from './lib/server.js';
import scripts from './lib/scripts.js';
import html from './lib/html.js';


export default class NgGulpRegistry extends DefaultRegistry {

  args = require('yargs').argv;
  env = process.env.NODE_ENV = this.args.env || process.env.NODE_ENV || 'dev';

  constructor(config = require('config')) {
    super();
    console.info('Using Env:', chalk.bgYellow.bold(this.env));
    this.config = config;
    if (config.util) {
      console.info('Loading gulp config from:\n\t'
        + chalk.blue.bold(config.util.getConfigSources().map(conf => conf.name).join('\n\t')));
    }
  }

  set(name, fn) {
    let taskConf = this.config[name]; // this.config.get(name);
    let boundFn = fn.bind(taskConf, this.gulp, this.config, browserSync);
    return super.set(name, boundFn);
  }

  init(gulp) {
    this.gulp = gulp;
    //this.set('deploy', (cb)  => {
    //    console.log('task:deploy done!');
    //    cb();
    //});
    //gulp.task('build', function(cb) {
    //    console.log(this.src);
    //    return del('dist');
    //});


    //var requireDir = require('require-dir')(gulp);
    //tasks = requireDir('./gulp', { recurse: false });
    // if each file export more then one task, add all
    //tasks.forEach(
    //  gulp.task(task);
    //)

    gulp.task(clean);
    gulp.task(gpdeploy);
    gulp.task(watch);
    gulp.task(server);
    gulp.task(scripts);
    gulp.task(html);
    gulp.watch('src/**/*.js', gulp.series('scripts'));
    gulp.watch('src/**/*.html', gulp.series('html'));
    //gulp.task('watch', ['sass', 'fonts', 'lint-js'],watch);
  }
}
