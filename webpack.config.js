const  {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const WriteFilePlugin =require('write-file-webpack-plugin') ;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        About:'./src/widget/About/index.js',
        Home:'./src/widget/Home/index.js',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].js'
    },
    devServer: {
        open:true,
    },
    // resolve: {
    //   extensions: ['', '.js', '.jsx']
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }
      ]
    },
    optimization: {
       minimizer: [new TerserPlugin({
        parallel: true,sourceMap: true,
      })],
      splitChunks: {
          cacheGroups: {
              default: false,
              vendors: false,
              // vendor chunk
              vendor: {
                name: 'vendor',
                  // sync + async chunks
                  chunks: 'all',
                  // import file path containing node_modules
                  test: /node_modules/,
                  priority: 20,
              },
              // common chunk
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true
              }

          }
      }},
    plugins: [
      new CleanWebpackPlugin(),
      new WriteFilePlugin(),
      new BundleAnalyzerPlugin(),

      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true),
        ENVIRONMENT_VAR: JSON.stringify(' ENV 1.0'), 
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
       
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
          ],
    devtool: 'inline-source-map',
  };
  