const path = require('path');
module.exports = {
  entry: `./src/smtc.js`,
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: `smtc.js`,
    library: '',
    libraryExport: '',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
