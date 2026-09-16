import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers'
import type { MySwitch } from './switch.js'
import './switch.js'

const { args, argTypes, template } = getStorybookHelpers<MySwitch>('my-switch')

const meta = {
  title: 'Workshop/Switch',
  tags: ['autodocs'],
  args,
  argTypes,
  render: (storyArgs) => template(storyArgs, html`My switch placeholder`),
} satisfies Meta<MySwitch>

export default meta
type Story = StoryObj

export const Placeholder: Story = {}
