import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  external: ['react', '@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
})
