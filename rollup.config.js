import tsc from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'src/main.ts',
  output: { file: './content.js', format: 'iife', name: 'yes' },
  plugins: [
    tsc(),
    resolve(),
    json(),
    process.env.minify ? terser({format: { comments: false }}) : {},
  ]
}