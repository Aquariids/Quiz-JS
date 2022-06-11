const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

    ],
    
  },
 
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
