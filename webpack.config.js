import path from 'path'
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';


export default {
  entry: {
    app: [
      './index.js',
      './fs.polyfill.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path:  path.resolve(new URL('.', import.meta.url).pathname, 'dist')
    },
  module: {
    rules: [
            {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
      new NodePolyfillPlugin()
    ],
};
