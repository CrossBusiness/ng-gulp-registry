import browserSyncModule from 'browser-sync';
import spa from 'browser-sync-spa';
import proxy from 'http-proxy-middleware';

const browserSync = browserSyncModule.create('Static Server');

browserSync.use(spa({
  selector: '[ng-app]'
}));


function server(gulp, config) {
  let proxyConfig = config.get('proxy');
  let proxies = [];
  if(proxyConfig) {
    for (let p of proxyConfig) {
      proxies.push(proxy(p.context, p.options));
    }
    this.options.middleware = proxies;
  }
  browserSync.init(this.options);
  //browserSync.init(this.options, cb);
}


server.description = 'dev server';

export  {server, browserSync}
