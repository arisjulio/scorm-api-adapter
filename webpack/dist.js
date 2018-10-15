const path = require('path')
const OUTPUT_DIR = path.resolve(__dirname, '..', 'dist')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'scorm-api-adapter.js',
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