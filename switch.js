/**
 * An accessible switch control backed by a native checkbox.
 *
 * @attr {boolean} checked - Whether the switch is on.
 * @attr {boolean} disabled - Prevents interaction with the switch.
 * @attr {string} aria-label - Accessible name used when no visible label is provided.
 * @attr {string} name - Form field name.
 * @attr {string} value - Form field value when checked.
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
class MySwitch extends HTMLElement {
  static formAssociated = true

  static observedAttributes = [
    'aria-label',
    'checked',
    'disabled',
    'name',
    'value',
  ]

  #input
  #internals

  constructor() {
    super()
    this.#internals = this.attachInternals?.()
    const root = this.attachShadow({ mode: 'open' })
    root.innerHTML = `
      <style>
    :host {
      --switch-width: 3.25rem;
      --switch-height: 1.875rem;
      --switch-padding: 0.1875rem;
      --switch-off-color: #d8dce3;
      --switch-on-color: #2563eb;
      --switch-thumb-color: #ffffff;
      --switch-focus-color: #93c5fd;
      --switch-label-color: #172033;

      align-items: center;
      color: var(--switch-label-color);
      cursor: pointer;
      display: inline-flex;
      font: 500 0.9375rem/1.3 system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
      gap: 0.625rem;
      min-height: 2.75rem;
      user-select: none;
      vertical-align: middle;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .control {
      block-size: var(--switch-height);
      border-radius: 999px;
      display: inline-flex;
      flex: 0 0 auto;
      inline-size: var(--switch-width);
      position: relative;
    }

    input {
      block-size: 1px;
      inline-size: 1px;
      opacity: 0;
      position: absolute;
    }

    .track {
      background: var(--switch-off-color);
      border-radius: inherit;
      inset: 0;
      position: absolute;
      transition: background-color 160ms ease, box-shadow 160ms ease;
    }

    .thumb {
      background: var(--switch-thumb-color);
      border-radius: 50%;
      box-shadow: 0 1px 3px rgb(15 23 42 / 28%);
      block-size: calc(var(--switch-height) - (var(--switch-padding) * 2));
      inset-block-start: var(--switch-padding);
      inset-inline-start: var(--switch-padding);
      position: absolute;
      transform: translateX(0);
      transition: transform 160ms ease;
      inline-size: calc(var(--switch-height) - (var(--switch-padding) * 2));
    }

    input:checked + .track {
      background: var(--switch-on-color);
    }

    input:checked + .track .thumb {
      transform: translateX(calc(var(--switch-width) - var(--switch-height)));
    }

    input:focus-visible + .track {
      box-shadow: 0 0 0 3px var(--switch-focus-color);
    }

    .label:empty {
      display: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .track,
      .thumb {
        transition: none;
      }
    }
      </style>
      <span class="control">
        <input type="checkbox" role="switch" />
        <span class="track" aria-hidden="true"><span class="thumb"></span></span>
      </span>
      <span class="label"><slot></slot></span>
    `
    this.#input = root.querySelector('input')
    this.#input.addEventListener('change', () => this.#handleChange())
    this.addEventListener('click', (event) => {
      if (event.target !== this.#input && !this.disabled) {
        this.#input.click()
      }
    })
  }

  connectedCallback() {
    this.#syncInput()
  }

  attributeChangedCallback() {
    this.#syncInput()
  }

  /** Whether the switch is on. Reflects the `checked` attribute. */
  get checked() {
    return this.#input?.checked ?? this.hasAttribute('checked')
  }

  set checked(value) {
    this.toggleAttribute('checked', Boolean(value))
  }

  /** Whether the switch can be interacted with. */
  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value) {
    this.toggleAttribute('disabled', Boolean(value))
  }

  /** Toggle the switch and dispatch its `change` event. */
  toggle() {
    if (!this.disabled) {
      this.#input.click()
    }
  }

  #syncInput() {
    if (!this.#input) return
    this.#input.checked = this.hasAttribute('checked')
    this.#input.disabled = this.disabled
    this.#input.name = this.getAttribute('name') ?? ''
    this.#input.value = this.getAttribute('value') ?? 'on'
    this.#input.setAttribute(
      'aria-label',
      this.getAttribute('aria-label') ?? 'Switch',
    )
    this.#internals?.setFormValue(this.#input.checked ? this.#input.value : null)
  }

  #handleChange() {
    this.toggleAttribute('checked', this.#input.checked)
    this.#internals?.setFormValue(this.#input.checked ? this.#input.value : null)
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {
          checked: this.#input.checked,
        },
        bubbles: true,
        composed: true,
      }),
    )
  }
}

if (!customElements.get('my-switch')) {
  customElements.define('my-switch', MySwitch)
}

export { MySwitch }
