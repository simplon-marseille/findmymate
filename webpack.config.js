const webpack = require("webpack");
const path = require("./node_modules/.bin/webpack-dev-server");

let config = {
  devServer: {
    watchContentBase: true,
  },
  entry: "./src/index.js",
  mode: "development",
  output: {
    //path: path.resolve(__dirname, "./src"),
    filename: "./bundle.js"
  }
}

module.exports = config;




