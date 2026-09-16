import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'components',
          include: ['src/**/*.test.ts'],
          setupFiles: ['./vitest.setup.ts'],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})
