import { LitElement, html } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { mySwitchStyles } from './switch.styles.js'

/**
 * An accessible switch control backed by a native checkbox.
 *
 * @slot - Optional text displayed beside the switch.
 * @fires change - Dispatched when the checked state changes.
 * @cssprop [--switch-width=3.25rem] - The width of the switch track.
 * @cssprop [--switch-height=1.875rem] - The height of the switch track.
 * @cssprop [--switch-off-color=#d8dce3] - The track color when unchecked.
 * @cssprop [--switch-on-color=#2563eb] - The track color when checked.
 * @cssprop [--switch-thumb-color=#ffffff] - The thumb color.
 * @cssprop [--switch-focus-color=#93c5fd] - The focus ring color.
 * @cssprop [--switch-label-color=#172033] - The label text color.
 */
@customElement('my-switch')
export class MySwitch extends LitElement {
  static formAssociated = true

  /** Whether the switch is on. */
  @property({ type: Boolean, reflect: true })
  checked = false

  /** Whether the switch can be interacted with. */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /** Form field name. */
  @property()
  name = ''

  /** Form field value when checked. */
  @property()
  value = 'on'

  @property({ attribute: 'aria-label' })
  /** Accessible name used when no visible label is provided. */
  ariaLabel = 'Switch'

  @query('input') private input!: HTMLInputElement

  private internals = this.attachInternals()

  render() {
    return html`
      <label class="control">
        <input
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel}
          .checked=${this.checked}
          .name=${this.name}
          .value=${this.value}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="track" aria-hidden="true">
          <span class="thumb"></span>
        </span>
      </label>
      <span class="label"><slot></slot></span>
    `
  }

  /** Toggle the switch and dispatch its `change` event. */
  toggle() {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
  }

  protected updated() {
    this.internals.setFormValue(this.checked ? this.value : null)
  }

  private handleChange() {
    this.checked = this.input.checked
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }))
  }

  static styles = mySwitchStyles
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch
  }
}
