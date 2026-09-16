import { html } from 'lit'
import { render } from 'vitest-browser-lit'
import { expect, test } from 'vitest'
import { MySwitch } from './switch.js'

test('renders an accessible switch with its slotted label', async () => {
  const screen = render(html`<my-switch>Notifications</my-switch>`)

  await expect.element(screen.getByRole('switch', { name: 'Switch' })).toBeVisible()
  await expect.element(screen.getByText('Notifications')).toBeVisible()
})

test('starts unchecked and supports the checked attribute', async () => {
  const unchecked = render(html`<my-switch></my-switch>`)
  await expect.element(unchecked.getByRole('switch')).not.toBeChecked()

  const checked = render(html`<my-switch checked></my-switch>`)
  await expect.element(checked.getByRole('switch')).toBeChecked()
})

test('updates its checked state and emits change when clicked', async () => {
  let changeCount = 0
  const screen = render(html`<my-switch @change=${() => changeCount++}></my-switch>`)

  await screen.getByRole('switch').click()

  await expect.element(screen.getByRole('switch')).toBeChecked()
  expect(changeCount).toBe(1)
})

test('toggles programmatically', async () => {
  const component = document.createElement('my-switch') as MySwitch
  document.body.append(component)

  component.toggle()

  await expect.poll(() => component.checked).toBe(true)
})

test('does not toggle when disabled', async () => {
  const screen = render(html`<my-switch disabled></my-switch>`)
  const component = document.querySelector('my-switch') as MySwitch

  await expect.element(screen.getByRole('switch')).toBeDisabled()
  component.toggle()
  await expect.element(screen.getByRole('switch')).not.toBeChecked()
})
