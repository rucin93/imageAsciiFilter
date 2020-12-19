import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
    external: ['canvas'],
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/asciiFilter.esm.js',
            format: 'es'
        },
        {
            file: 'dist/asciiFilter.cjs.js',
            format: 'cjs',
            exports: 'default'
        },
        {
            file: 'dist/asciiFilter.min.js',
            format: 'iife',
            name: 'asciiFilter'
        }
    ],
    plugins: [typescript({ target: 'es2020' }), terser()]
}
