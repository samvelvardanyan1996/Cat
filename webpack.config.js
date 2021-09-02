const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, './src/modules') // added this
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html"
  //   })
  // ],
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "main.js"
  },
};