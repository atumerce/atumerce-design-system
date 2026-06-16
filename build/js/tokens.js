/**
 * Atumerce Design Tokens — JavaScript Module
 * Generated from W3C Design Tokens Format
 */

export const color = {
  brand: {
    turquoise: {
      1: { value: '#00AAFF', type: 'color', description: 'Turquoise light — glow, highlights' },
      2: { value: '#4DFFF5', type: 'color', description: 'Turquoise bright — emphasis states' },
      3: { value: '#00CCBB', type: 'color', description: 'Turquoise core — CTA, links, brand accent' },
      4: { value: '#003330', type: 'color', description: 'Teal dark — secondary surfaces' },
    },
    gold: {
      1: { value: '#FFC34D', type: 'color', description: 'Gold main — premium, rewards, primary highlights' },
      2: { value: '#BF9540', type: 'color', description: 'Gold warm — hover, secondary emphasis' },
      3: { value: '#CC8800', type: 'color', description: 'Gold deep — active states, strong emphasis' },
      4: { value: '#996600', type: 'color', description: 'Gold darker — subdued premium elements' },
      5: { value: '#604000', type: 'color', description: 'Gold shadow — dark accents, borders' },
    },
    mono: {
      1: { value: '#000000', type: 'color', description: 'Pure black — deepest void' },
      2: { value: 'rgba(0,0,0,0.8)', type: 'color', description: 'Black 80% — overlays, panels' },
      3: { value: 'rgba(0,0,0,0.7)', type: 'color', description: 'Black 70% — glass panels' },
      4: { value: 'rgba(0,0,0,0.6)', type: 'color', description: 'Black 60% — subtle overlays' },
      5: { value: 'rgba(255,255,255,0.15)', type: 'color', description: 'White 15% — subtle lines, dividers' },
      6: { value: 'rgba(255,255,255,0.3)', type: 'color', description: 'White 30% — hover overlays, borders' },
      7: { value: '#999999', type: 'color', description: 'Muted grey — secondary text, captions' },
      8: { value: '#E6E6E6', type: 'color', description: 'Light grey — primary text on dark' },
    },
  },
  semantic: {
    surface: {
      default: { value: '#000000', type: 'color', description: 'Default page background — mono.1' },
      raised: { value: 'rgba(0,0,0,0.8)', type: 'color', description: 'Card / elevated surface — mono.2' },
      overlay: { value: 'rgba(0,0,0,0.7)', type: 'color', description: 'Modal / panel overlay — mono.3' },
    },
    text: {
      primary: { value: '#E6E6E6', type: 'color', description: 'Headings, body text — mono.8' },
      secondary: { value: '#999999', type: 'color', description: 'Captions, metadata — mono.7' },
      inverse: { value: '#000000', type: 'color', description: 'Text on light backgrounds — mono.1' },
    },
    border: {
      subtle: { value: 'rgba(255,255,255,0.15)', type: 'color', description: 'Dividers, borders on dark — mono.5' },
      accent: { value: '#00CCBB', type: 'color', description: 'Active / focused borders — turquoise.3' },
    },
    state: {
      hover: { value: 'rgba(0,204,187,0.1)', type: 'color', description: 'Hover overlay at 10% turquoise.3' },
      active: { value: 'rgba(0,204,187,0.2)', type: 'color', description: 'Active / pressed overlay at 20% turquoise.3' },
      disabled: { value: 'rgba(153,153,153,0.4)', type: 'color', description: 'Disabled state at 40% mono.7' },
    },
  },
};

export const font = {
  family: {
    sans: { value: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], type: 'fontFamily' },
    display: { value: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], type: 'fontFamily' },
    mono: { value: ['Mona Sans', 'ui-monospace', 'SFMono-Regular', 'monospace'], type: 'fontFamily', description: 'Data / code labels — Mona Sans tabular variant' },
  },
  size: {
    xs: { value: '0.75rem', type: 'fontSize' },
    sm: { value: '0.875rem', type: 'fontSize' },
    base: { value: '1rem', type: 'fontSize' },
    lg: { value: '1.125rem', type: 'fontSize' },
    xl: { value: '1.25rem', type: 'fontSize' },
    '2xl': { value: '1.5rem', type: 'fontSize' },
    '3xl': { value: '1.875rem', type: 'fontSize' },
    '4xl': { value: '2.25rem', type: 'fontSize' },
    '5xl': { value: '3rem', type: 'fontSize' },
    '6xl': { value: '3.75rem', type: 'fontSize' },
    '7xl': { value: '4.5rem', type: 'fontSize' },
  },
};

export const spacing = {
  0: { value: '0px', type: 'dimension' },
  1: { value: '0.25rem', type: 'dimension' },
  2: { value: '0.5rem', type: 'dimension' },
  3: { value: '0.75rem', type: 'dimension' },
  4: { value: '1rem', type: 'dimension' },
  5: { value: '1.25rem', type: 'dimension' },
  6: { value: '1.5rem', type: 'dimension' },
  8: { value: '2rem', type: 'dimension' },
  10: { value: '2.5rem', type: 'dimension' },
  12: { value: '3rem', type: 'dimension' },
  16: { value: '4rem', type: 'dimension' },
  20: { value: '5rem', type: 'dimension' },
  24: { value: '6rem', type: 'dimension' },
  32: { value: '8rem', type: 'dimension' },
  px: { value: '1px', type: 'dimension' },
};

export const shadow = {
  sm: { value: '0px 1px 2px 0px rgba(0,0,0,0.1)', type: 'shadow' },
  md: { value: '0px 4px 6px -1px rgba(0,0,0,0.1)', type: 'shadow' },
  lg: { value: '0px 10px 15px -3px rgba(0,0,0,0.15)', type: 'shadow' },
  glowTurquoise: { value: '0px 0px 20px 0px rgba(0,204,187,0.2)', type: 'shadow' },
};

export const radius = {
  none: { value: '0px', type: 'dimension' },
  sm: { value: '0.25rem', type: 'dimension' },
  md: { value: '0.5rem', type: 'dimension' },
  lg: { value: '0.75rem', type: 'dimension' },
  xl: { value: '1rem', type: 'dimension' },
  '2xl': { value: '1.5rem', type: 'dimension' },
  full: { value: '9999px', type: 'dimension' },
};

export default { color, font, spacing, shadow, radius };
