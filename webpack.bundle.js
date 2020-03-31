const path = require("path")

module.exports = {
  mode: 'production',
  entry: {
    "bundle": path.resolve(__dirname, './src/index.js'),
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  output: {
    path: path.join(__dirname, 'integration'),
    filename: 'martins-widget.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
}