// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';


export default {
  input: 'lib/index.js',
  // dest: 'dist/bundle.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  name: 'htmlparser2',
  plugins: [
  	resolve({
  		browser: true,
  		main: true,
  		preferBuiltins: false,
  	}),
  	json(),
    builtins(),
  	commonjs(),
  	// uglify()
  ]
};