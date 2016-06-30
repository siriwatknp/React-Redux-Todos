var webpack = require('webpack');

module.exports = {
  devtool:'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
     "./client/index.js"
  ],
  output:{
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        include: __dirname + '/client',
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
}
