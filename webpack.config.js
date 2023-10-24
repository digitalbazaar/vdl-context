/*!
 * Copyright (c) 2021-2023 Digital Bazaar, Inc. All rights reserved.
 */
module.exports = {
  output: {
    libraryTarget: 'commonjs',
    filename: 'context.js'
  },
  mode: 'production',
  entry: './js/index.js',
  module: {
    rules: [
      {
        test: /\.jsonld$/,
        loader: 'json-loader'
      }
    ]
  }
};
