const path = require('path');
const webpack = require('webpack');

module.exports = [
  {
    mode: 'production',
    entry: './node_modules/state-machine-cat/dist/index.mjs',
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'smcat.min.js',
      library: { name: 'smcat', type: 'window' },
    },
    plugins: [
      // keep the bundle a single file (state-machine-cat uses import()
      // internally, which webpack would otherwise split into chunk files)
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    ],
  },
  {
    mode: 'production',
    entry: './node_modules/markdown/lib/index.js',
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: 'markdown.min.js',
      library: { name: 'markdown', type: 'window' },
    },
    resolve: {
      fallback: {
        // webpack 5 no longer polyfills node builtins automatically
        util: require.resolve('util/'),
      },
    },
  },
];
