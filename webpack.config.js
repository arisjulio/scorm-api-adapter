const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, 'test')

module.exports = {
  entry: {
    main: './test/index.js'
  },
  output: {
    filename: 'index-compiled.js',
    path: OUTPUT_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
};