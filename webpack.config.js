const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/js')
  },
  optimization: {
        minimizer: [
        new TerserPlugin({
            extractComments: 'all',
            terserOptions: {
                compress: {
                  drop_console: true,
                },
            },
        }),
      ],
    }
};
