import { litPlugin } from '@wc-toolkit/cem-generator-lit'
import { reactWrapperGeneratorPlugin } from '@wc-toolkit/react-wrappers'
import { jsxTypesGeneratorPlugin } from '@wc-toolkit/jsx-types'
import { vuejsTypesGeneratorPlugin } from '@wc-toolkit/vuejs-types'
import { svelteTypesGeneratorPlugin } from '@wc-toolkit/svelte-types'

const componentModulePath = (className, tagName) =>
  `web_components_101_ndc_oslo_2026/components/${tagName.replace('my-', '')}`

export default {
  include: ['src/**/*.{ts,tsx,js,jsx}', 'src/**/*.css'],
  exclude: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*', '**/dist/**', '**/node_modules/**'],
  plugins: [
    litPlugin(),
    reactWrapperGeneratorPlugin({
      stronglyTypedEvents: true,
      modulePath: componentModulePath,
    }),
    jsxTypesGeneratorPlugin({
      outdir: './types',
      stronglyTypedEvents: true,
      componentTypePath: componentModulePath,
    }),
    vuejsTypesGeneratorPlugin({
      outdir: './types',
      stronglyTypedEvents: true,
      componentTypePath: componentModulePath,
    }),
    svelteTypesGeneratorPlugin({
      outdir: './types',
      stronglyTypedEvents: true,
      componentTypePath: componentModulePath,
    }),
  ],
}
