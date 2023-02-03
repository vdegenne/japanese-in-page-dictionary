import tsc from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
// import {terser} from 'rollup-plugin-terser'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'

const randomNumber = Math.floor(Math.random() * 100000)
const elements = ['mwc-dialog', 'mwc-ripple', 'mwc-icon', 'mwc-button', 'mwc-icon-button'];
const replaceMap = elements.map((el) => [el, `${el}${randomNumber}`])

// const minify = process.env.minify ? terser({format: { comments: false }}) : {};
const minify = terser({ format: { comments: false }})


export default {
  input: 'src/main.ts',
  output: { file: 'content.js', format: 'esm' },
  plugins: [
    tsc(),
    resolve(),
    json(),
    minify,
    replace({
      preventAssignment: true,
      ...Object.fromEntries(replaceMap),
      delimiters: ['\\b', "\\b(?!\\.)(?!\\/)(?!-)(?!\\')"]
    })
  ]
}