const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  externals: [nodeExternals()],
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/server/server.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.scss$/,
        /**
         * Примечание: Сначала css-loader затем style-loader используется
         */
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
    ],
  },
};
