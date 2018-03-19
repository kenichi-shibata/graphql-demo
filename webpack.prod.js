const path = require('path')

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node' // don't touch any built in node-modules
};

