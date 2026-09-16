import type { StorybookConfig } from '@storybook/web-components-vite';
import { storybookHelpersReloader } from '@wc-toolkit/storybook-helpers';

const helpersReloader = storybookHelpersReloader();

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/web-components-vite",
  viteFinal: helpersReloader.viteFinal as StorybookConfig['viteFinal'],
};
export default config;
