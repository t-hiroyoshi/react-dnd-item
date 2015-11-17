var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "lib/index.js",
    library: "ReactDnDItem",
    libraryTarget: "umd"
  },
  externals: { "react": "React" },
  module: { loaders: [{ test: /\.jsx?$/, loader: "babel", exclude: /node_modules/ }] }
};
