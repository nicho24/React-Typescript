const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      }
      // Add other rules for different file types if needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};