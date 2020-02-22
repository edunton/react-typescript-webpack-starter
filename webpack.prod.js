const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = {
  ...common,
  output: {
    path: `${__dirname}/dist/prod`,
    publicPath: '/',
    filename: 'app.[name].js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
