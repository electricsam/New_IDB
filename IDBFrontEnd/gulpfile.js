const gulp = require('gulp');
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const run = require('gulp-run-command').default
const path = require('path')

const $ = require('gulp-load-plugins')({lazy: true});

const webpackConfig = require('./webpack.config.dev');



gulp.task('webpack_dev_server', ()=>{
  var myConfig = Object.create(webpackConfig);

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), myConfig.devServer)
    .listen(myConfig.devServer.port, 'localhost', function (err) {
    if (err) {
      throw new $.util.PluginError('webpack-dev-server', err);
    }
    $.util.log('[webpack-dev-server]', `http://localhost:${myConfig.devServer.port}/index.html`);
  });
})

//Not working but is supposed to use the middleware so that hmr works
gulp.task('webpack_dev_server_mid', ()=>{
  const compiler = webpack(webpackConfig);
  const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    before(app) {
      app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
      }));
      app.get('*', function(req, res) {
        res.sendFile(path.join( __dirname, '/src/index.html'));
      });
    }
  });
  const server = new WebpackDevServer(compiler, devServerOptions);

  server.listen(9000, () => {
    console.log('Starting server on http://localhost:8080');
  });
  $.util.log('[webpack-dev-server]', `http://localhost:${webpackConfig.devServer.port}/index.html`);
})


//HMR works here
gulp.task('serve', run('webpack-dev-server --config ./webpack.config.dev.js'))

//Runs nightwatch tests in chrome only
gulp.task('nightwatchChrome', ()=>{
  gulp.src('')
    .pipe($.nightwatch({
      configFile:'./nightwatch.json',
      cliArgs:['--env chrome']
    }))
})

//Runs nightwatch tests in chrome and firefox in parallel
gulp.task('nightwatch', ()=>{
  gulp.src('')
    .pipe($.nightwatch({
      configFile: './nightwatch.json',
      cliArgs: ['--env chrome, gecko']
    }))
})



//TODO: need to figure out how to map relative paths once it is bundled then can use the below to start the dev server
gulp.task('webpack_dev_server:start', ()=>{
  return $.nodemon({
      script: './server.js'
    })
})

gulp.task('default', ['webpack_dev_server:start'])