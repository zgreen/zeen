'use strict'

const path = require('path')
const webpack = require('webpack')
const isProduction = process.argv.indexOf('-p') !== -1
const plugins = [
  new webpack.DefinePlugin({
    IS_PRODUCTION: isProduction
  })
]
if (isProduction) {
	plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	)
}

module.exports = {
  externals: [require('webpack-node-externals')()],
  target: 'node',
  entry: {
    index: 'src/index.js',
  },
  output: {
    path: 'bin',
    publicPath: '/bin/',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
	plugins,
  resolve: {
    root: path.resolve(__dirname),
		extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
			{
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      }
    ]
  }
}
