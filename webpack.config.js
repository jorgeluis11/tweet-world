var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]},
      {test: /\.css$/, loader: "style-loader!css-loader" },
      // Font Definitions
    { test: /\.(png|gif|otf|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }     
]
  },
  plugins: [HTMLWebpackPluginConfig]
}
