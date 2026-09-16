import { css } from 'lit'

export const mySwitchStyles = css`
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
    font:
      500 0.9375rem/1.3 system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
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
    block-size: 100%;
    cursor: inherit;
    inset: 0;
    inline-size: 100%;
    opacity: 0;
    position: absolute;
    z-index: 1;
  }

  .track {
    background: var(--switch-off-color);
    border-radius: inherit;
    inset: 0;
    position: absolute;
    transition:
      background-color 160ms ease,
      box-shadow 160ms ease;
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

  :host([disabled]) .control {
    pointer-events: none;
  }

  :host {
    display: inline-block;
  }
`
