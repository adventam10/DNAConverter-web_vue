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
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js'],
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    }
};
