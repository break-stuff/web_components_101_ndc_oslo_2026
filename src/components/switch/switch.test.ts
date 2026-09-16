import { html } from 'lit'
import { render } from 'vitest-browser-lit'
import { expect, test } from 'vitest'
import './switch.js'

test('renders its slotted content', async () => {
  const screen = render(html`<my-switch>Ready</my-switch>`)

  await expect.element(screen.getByText('Ready')).toBeVisible()
})

test('renders its placeholder content by default', async () => {
  const screen = render(html`<my-switch></my-switch>`)

  await expect.element(screen.getByText('MySwitch placeholder')).toBeVisible()
})
