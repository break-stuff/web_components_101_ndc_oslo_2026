import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import { getStorybookHelpers } from '@wc-toolkit/storybook-helpers'
import type { MyButton } from './button.js'
import './button.js'

type ButtonArgs = {
  disabled: boolean
  label: string
}

const { args, argTypes, template } = getStorybookHelpers<MyButton>('my-button')

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (storyArgs: ButtonArgs) => template(storyArgs, html`${storyArgs.label}`),
  argTypes: {
    ...argTypes,
    disabled: {
      control: 'boolean',
      description: 'Prevents the button from being clicked.',
    },
    label: {
      control: 'text',
      description: 'Content rendered inside the button slot.',
    },
  },
  args: {
    ...args,
    disabled: false,
    label: 'Button',
  },
} satisfies Meta<ButtonArgs>

export default meta
type Story = StoryObj<ButtonArgs>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Unavailable',
  },
}

export const CustomLabel: Story = {
  args: {
    label: 'Save changes',
  },
}
