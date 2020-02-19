const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"), //change to dist when working locally
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    // contentBase: "./build",
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      favicon: 'favicon.ico'
    })
  ]
};
