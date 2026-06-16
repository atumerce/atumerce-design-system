# Atumerce Design System Tokens

W3C-compliant design tokens for the Atumerce brand. Single source of truth for colors, typography, spacing, and shadows across all platforms (web, iOS, Figma).

## Structure

```
tokens/
├── color/
│   ├── brand.json      # Atumerce brand colors (void, turquoise, gold...)
│   └── semantic.json   # Text, surface, border, state colors
├── font/
│   ├── family.json     # Mona Sans (sole typeface)
│   └── size.json       # 12px — 72px scale
├── spacing.json        # 4px — 128px scale
├── shadow.json         # Elevation + glow tokens
└── radius.json         # Corner radius tokens
```

## Installation

```bash
npm install @atumerce/tokens
```

## Usage

### CSS / Tailwind

```css
@import '@atumerce/tokens/build/css/variables.css';

.button {
  background: var(--color-brand-turquoise-3);
  color: var(--color-semantic-text-primary);
}
```

### JavaScript

```js
import tokens from '@atumerce/tokens/build/js/tokens.js';

// tokens.color.brand.turquoise['3'].value  // "#00CCBB"
```

### SCSS

```scss
@import '@atumerce/tokens/build/scss/tokens';

.card {
  background: $color-brand-mono-1;
  padding: $spacing-4;
}
```

## Tailwind Config Integration

See `examples/tailwind.config.example.js` for a full Tailwind v4 integration.

## Build

```bash
npm install
npm run build
```

Outputs to `build/`:
- `css/variables.css` — CSS custom properties
- `scss/_tokens.scss` — SCSS variables
- `js/tokens.js` — ES module
- `tokens.json` — Flat JSON

## License

MIT
