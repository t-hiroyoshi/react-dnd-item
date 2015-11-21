
var webpack = require("webpack");

module.exports = {
  entry: "./examples/ExampleDnD.js",
  output: {
    filename: "examples/bundle.js",
  },
  module: {
    loaders: [{ test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ }]
  }
}
