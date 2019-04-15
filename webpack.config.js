const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = [
  {
    mode: 'production',
    entry: './src/Header.vue',
    optimization: {
      minimize: true,
      namedModules: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Header.umd.js',
      library: 'Header',
      libraryTarget: 'umd',
      libraryExport: 'default'
    },
    externals: {
      vue: 'Vue'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  {
    mode: 'production',
    entry: './src/Header.vue',
    optimization: {
      minimize: true,
      namedModules: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false
          }
        })
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'Header.common.js',
      library: 'Header',
      libraryTarget: 'commonjs2',
      libraryExport: 'default'
    },
    externals: {
      vue: 'Vue'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
];
