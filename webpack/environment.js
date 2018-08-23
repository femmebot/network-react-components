'use strict'

const path = require('path')

const environment = {
  entry: {
    main: [path.resolve(__dirname, './polyfill.js'), './src/index'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {cacheDirectory: true},
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {cacheDirectory: true},
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  devtool: 'cheap-module-source-map',
  externals: {
    'ideo-sso': 'IdeoSSO',
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.svg',
      '.eot',
      '.ttf',
      '.woff',
      '.woff2',
      '.otf',
    ],
  },
}

if (process.env.ANALYZE) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

  environment.plugins.push(
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
      analyzerMode: 'static',
    })
  )
}

module.exports = environment
