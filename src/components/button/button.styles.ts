import { css } from 'lit'

export const buttonStyles = css`
  :host {
    /** Horizontal padding for the button */
    --button-padding-x: 1rem;
    /** Vertical padding for the button */
    --button-padding-y: 0.75rem;
    display: inline-block;
  }

  button {
    border: 0;
    border-radius: 0.5rem;
    padding: var(--button-padding-y) var(--button-padding-x);
    color: #ffffff;
    background: #2563eb;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
    transition:
      background 160ms ease,
      transform 160ms ease;
  }

  button:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
  }

  button:focus-visible {
    outline: 3px solid #93c5fd;
    outline-offset: 3px;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`
