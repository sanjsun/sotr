import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const MIN = process.env.MIN;

export default {
  input: 'src/main.js',
  output: {
    file: `dist/storager${MIN ? '.min' : ''}.js`,
    format: 'iife',
    name: 'storager',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    MIN && uglify(),
  ],
};
