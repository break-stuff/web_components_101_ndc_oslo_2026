import { defineConfig } from 'vite'
import { cemGeneratorPlugin } from '@wc-toolkit/cem-generator-bundler/vite'

export default defineConfig({
  plugins: [cemGeneratorPlugin()],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'components/button': 'src/components/button/button.ts',
        'components/switch': 'src/components/switch/switch.ts',
      },
      name: 'WebComponents101',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: { lit: 'Lit' },
      },
    },
  },
})
