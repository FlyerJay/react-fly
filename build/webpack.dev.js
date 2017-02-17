/* webpack.dev.js */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var utils = require('./utils');
var DeployPlugin = require('./deploy.plugin')

var PORT = 8080;
var HOST = utils.getIP();
var args = process.argv;
var hot = args.indexOf('--hot') > -1;
var deploy = args.indexOf('--deploy') > -1;

// 本地环境静态资源路径
var localPublicPath = 'http://' + HOST + ':' + PORT + '/';

config.output.publicPath = localPublicPath; 
config.entry.app.unshift('webpack-dev-server/client?' + localPublicPath);
if (hot === true){
  config.entry.app.unshift('webpack/hot/only-dev-server');
  config.module.loaders[0].loaders.unshift('react-hot');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (deploy === true){
  config.plugins.push(
    new DeployPlugin({
      user:'flyerjay',
      password:'20115435',
      host:'115.29.150.218',
      keepalive:10000000
    },
    [{reg:/html$/,to:'/react-fly/views'}]
    )
  )
}

config.devtool = '#eval-cheap-module-source-map';

new WebpackDevServer(webpack(config), {
  hot: hot,
  inline: true,
  compress: true,
  stats: {
    chunks: false,
    children: false,
    colors: true
  },
  historyApiFallback: true,
}).listen(PORT, HOST, function() {
  console.log(localPublicPath);
});