# Web Components 101

An educational web component library for learning how to create and use custom
elements.

## What You Will Learn

- How custom elements are registered with `customElements.define()`
- How to build reusable components using browser APIs and Lit
- How properties, templates, events, and reactive rendering work
- How Shadow DOM keeps a component's markup and styles encapsulated
- How slots allow consumers to provide content to a component
- How to use a custom element from HTML

## Getting Started

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development demo:

```bash
npm install
npm run dev
```

Open the URL printed by Vite in a browser. The development server supports hot
module replacement, so changes to the source are reflected automatically.

### Storybook

This project is also setup with [Storybook](https://storybook.js.org/docs/get-started/frameworks/web-components-vite). You can run it using the following command:

```bash
npm run storybook
```

## Using the Library

Import the library entry point to register the custom elements:

```ts
import 'web_components_101_ndc_oslo_2026'
```

Then use the elements in HTML:

```html
<my-button>Save changes</my-button>
<my-switch></my-switch>
```

The package also exports the component classes for TypeScript consumers:

```ts
import { MyButton, MySwitch } from 'web_components_101_ndc_oslo_2026'
```

Components can also be imported individually:

```ts
import 'web_components_101_ndc_oslo_2026/components/button'
import 'web_components_101_ndc_oslo_2026/components/switch'
```

React wrappers and framework integration types are available through package
subpaths:

```ts
import { MyButton } from 'web_components_101_ndc_oslo_2026/react'
import 'web_components_101_ndc_oslo_2026/types'
```

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the library |
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
│   ├── components/switch/
│   │   ├── switch.ts        # Workshop placeholder <my-switch> element
│   │   └── switch.stories.ts
│   └── index.ts              # Public library entry point
│   └── index.css            # Global styles
├── public/             # Static files served as-is
├── package.json        # Scripts and dependencies
└── tsconfig.json       # TypeScript configuration
```

## The Example Button

`src/components/button/button.ts` defines and registers `<my-button>` using
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
