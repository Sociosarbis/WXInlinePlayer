import { terser } from "rollup-plugin-terser"

export default {
    input: 'lib/codec/tool/wrapper.js',
    output: {
      dir: 'lib/codec/dist',
      format: 'iife',
      entryFileNames: 'codec.js'
    },
    plugins: [terser()]
}