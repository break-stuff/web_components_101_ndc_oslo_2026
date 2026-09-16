import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { mySwitchStyles } from './switch.styles.js'

@customElement('my-switch')
export class MySwitch extends LitElement {
  render() {
    return html`<slot>MySwitch placeholder</slot>`
  }

  static styles = mySwitchStyles
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch
  }
}
