import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    peerDepsExternal(),
    commonjs(),
    resolve(),
    terser(),
    del({ targets: 'dist/*' }),
  ],
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
  ],
};
