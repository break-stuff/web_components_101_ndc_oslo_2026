import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { buttonStyles } from './button.styles.js'

/**
 * A custom button element.
 */
@customElement('my-button')
export class MyButton extends LitElement {
  /** Whether the button is disabled. */
  @property({ type: Boolean, reflect: true })
  disabled = false

  render() {
    return html`
      <!-- The button element that can be styled via the "button" CSS part -->
      <button ?disabled=${this.disabled} type="button" part="button">
        <!-- The content of the button, which can be customized via markup in the slot -->
        <slot>Button</slot>
      </button>
    `
  }

  static styles = buttonStyles
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}
