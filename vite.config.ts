import { defineConfig } from 'vite'
import { cemGeneratorPlugin } from '@wc-toolkit/cem-generator-bundler/vite'

export default defineConfig({
  plugins: [cemGeneratorPlugin()],
})
