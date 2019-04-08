const path = require('path');

module.exports = {
  devServer: {
    watchContentBase: true,
  },
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "sourcemap"
};







// const webpack = require("webpack");
// const path = require("./node_modules/.bin/webpack-dev-server");

// let config = {
//   devServer: {
//     watchContentBase: true,
//   },
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     //path: path.resolve(__dirname, "./src"),
//     filename: "./bundle.js"
//   }
// }

// module.exports = config;
