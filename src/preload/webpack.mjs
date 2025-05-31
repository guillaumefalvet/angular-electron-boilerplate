import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
  if (!env) {
    env = 'development';
  }
  return {
    entry: {
      main: './src/preload/preload.ts'
    },
    target: 'electron-preload',
    output: {
      path: path.resolve(__dirname, '../../dist/preload'),
      filename: 'preload.js'
    },
    externals: [],
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
      alias: {}
    },
    node: {
      __dirname: true,
      __filename: true
    },
    plugins: []
  };
};
