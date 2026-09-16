# Web Components 101

An educational project for learning how to create and use custom elements.

## What You Will Learn

- How custom elements are registered with `customElements.define()`
- How to build reusable components with Lit's `LitElement`
- How properties, templates, events, and reactive rendering work
- How Shadow DOM keeps a component's markup and styles encapsulated
- How slots allow consumers to provide content to a component
- How to use a custom element from HTML

## Getting Started

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the URL printed by Vite in a browser. The development server supports hot
module replacement, so changes to the source are reflected automatically.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run test` | Run browser tests once |
| `npm run test:watch` | Run browser tests in watch mode |
| `npm run lint` | Check source files with Oxlint |
| `npm run lint:fix` | Apply Oxlint fixes |
| `npm run format` | Format source and configuration files with Oxfmt |
| `npm run format:check` | Check formatting without changing files |

## Project Structure

```text
.
├── index.html          # Application entry point
├── src/
│   ├── components/button/
│   │   ├── button.ts        # The <my-button> custom element
│   │   ├── button.styles.ts # Styles for the custom element
│   │   └── button.test.ts   # Browser tests for the button
│   ├── components/my-switch/
│   │   ├── my-switch.ts     # Workshop placeholder <my-switch> element
│   │   └── my-switch.stories.ts
│   └── index.css            # Global styles
├── public/             # Static files served as-is
├── package.json        # Scripts and dependencies
└── tsconfig.json       # TypeScript configuration
```

## The Example Button

`src/components/button/button.ts` defines and registers `<basic-button>` using
Lit's `@customElement` decorator:

```ts
@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: Boolean, reflect: true })
  disabled = false
}
```

Once the module is loaded, the component can be used like a built-in HTML
element and can receive content through its default slot:

```html
<my-button>Save changes</my-button>
```

Try changing the component in `src/components/button/button.ts` or its styles in
`src/components/button/button.styles.ts`. Useful
experiments include adding a variant property, handling a click event, changing
the component's styles, and adding a named slot.

## Testing

Component tests run in Chromium through Vitest Browser Mode and Playwright.
`vitest-browser-lit` provides Lit-aware rendering and locators, so the tests
exercise the custom element through its public HTML interface.

## Further Reading

- [MDN: Using custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [MDN: Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- [Lit documentation](https://lit.dev/docs/)
- [CEM Generator](https://wc-toolkit.github.io/cem-generator/)
- [WC Toolkit](https://wc-toolkit.com/)
