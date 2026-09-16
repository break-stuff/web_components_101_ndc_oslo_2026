import { litPlugin } from '@wc-toolkit/cem-generator-lit'
import { reactWrapperGeneratorPlugin } from '@wc-toolkit/react-wrappers'
import { jsxTypesGeneratorPlugin } from '@wc-toolkit/jsx-types'
import { vuejsTypesGeneratorPlugin } from '@wc-toolkit/vuejs-types'
import { svelteTypesGeneratorPlugin } from '@wc-toolkit/svelte-types'

export default {
  include: ['src/**/*.{ts,tsx,js,jsx}', 'src/**/*.css'],
  exclude: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*', '**/dist/**', '**/node_modules/**'],
  plugins: [
    litPlugin(),
    reactWrapperGeneratorPlugin({ stronglyTypedEvents: true }),
    jsxTypesGeneratorPlugin({ outdir: './types', stronglyTypedEvents: true }),
    vuejsTypesGeneratorPlugin({ outdir: './types', stronglyTypedEvents: true }),
    svelteTypesGeneratorPlugin({ outdir: './types', stronglyTypedEvents: true }),
  ],
}
