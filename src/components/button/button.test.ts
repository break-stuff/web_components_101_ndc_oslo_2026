import { html } from 'lit'
import { render } from 'vitest-browser-lit'
import { expect, test } from 'vitest'
import './button.js'

test('renders its slotted label', async () => {
  const screen = render(html`<my-button>Save changes</my-button>`)

  await expect.element(screen.getByRole('button', { name: 'Save changes' })).toBeVisible()
})

test('renders its default label when no content is provided', async () => {
  const screen = render(html`<my-button></my-button>`)

  await expect.element(screen.getByRole('button', { name: 'Button' })).toBeVisible()
})

test('disables the native button when disabled is set', async () => {
  const screen = render(html`<my-button disabled>Unavailable</my-button>`)

  await expect.element(screen.getByRole('button', { name: 'Unavailable' })).toBeDisabled()
})
