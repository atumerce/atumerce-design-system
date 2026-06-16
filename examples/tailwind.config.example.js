// Example: Tailwind CSS v4 integration with Atumerce tokens
// Copy into your project's tailwind.config.js

import tokens from '@atumerce/tokens/build/js/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './app/**/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: tokens.font.family.sans.value,
        display: tokens.font.family.display.value,
        mono: tokens.font.family.mono.value,
      },
      colors: {
        turquoise: {
          1: tokens.color.brand.turquoise['1'].value,
          2: tokens.color.brand.turquoise['2'].value,
          3: tokens.color.brand.turquoise['3'].value,
          4: tokens.color.brand.turquoise['4'].value,
        },
        gold: {
          1: tokens.color.brand.gold['1'].value,
          2: tokens.color.brand.gold['2'].value,
          3: tokens.color.brand.gold['3'].value,
          4: tokens.color.brand.gold['4'].value,
          5: tokens.color.brand.gold['5'].value,
        },
        mono: {
          1: tokens.color.brand.mono['1'].value,
          2: tokens.color.brand.mono['2'].value,
          3: tokens.color.brand.mono['3'].value,
          4: tokens.color.brand.mono['4'].value,
          5: tokens.color.brand.mono['5'].value,
          6: tokens.color.brand.mono['6'].value,
          7: tokens.color.brand.mono['7'].value,
          8: tokens.color.brand.mono['8'].value,
        },
        surface: {
          DEFAULT: tokens.color.semantic.surface.default.value,
          raised: tokens.color.semantic.surface.raised.value,
          overlay: tokens.color.semantic.surface.overlay.value,
        },
        text: {
          primary: tokens.color.semantic.text.primary.value,
          secondary: tokens.color.semantic.text.secondary.value,
          inverse: tokens.color.semantic.text.inverse.value,
        },
      },
      boxShadow: {
        glow: tokens.shadow.glowTurquoise.value,
      },
    },
  },
};
