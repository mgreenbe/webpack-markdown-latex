const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  /*  module: {
    rules: [
      {
        test: /\.md$/,
        use: [{loader: "html-loader"}, {loader: "markdown-it-loader"}]
      }
    ]
  },*/
  devServer: {
    contentBase: path.resolve(__dirname, ".")
  }
}
