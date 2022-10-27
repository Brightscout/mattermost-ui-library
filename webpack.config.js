const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'mattermost-ui-library'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: ['babel-loader', 'ts-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.(sc|c)ss$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(svg)$/,
            use: ['@svgr/webpack', 'url-loader'],
          },
        ]
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    externals: {
        react: 'react',
        'react/jsx-runtime': 'react/jsx-runtime',
        'react-dom': 'react-dom',
        'styled-components': 'styled-components',
    }
}
