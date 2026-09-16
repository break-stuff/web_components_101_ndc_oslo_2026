import type { Preview } from '@storybook/web-components-vite'
import { setCustomElementsManifest } from '@storybook/web-components-vite'
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers'
import manifest from '../custom-elements.json' with { type: 'json' }

setCustomElementsManifest(manifest)
setStorybookHelpersConfig()

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
