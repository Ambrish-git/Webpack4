
module.exports = {
    entry: {
        About:'./src/widget/About/index.js',
        Home:'./src/widget/Home/index.js',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js'
    },
    devServer: {
        open:true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      
            
          ],
    devtool: 'inline-source-map',
  };
  