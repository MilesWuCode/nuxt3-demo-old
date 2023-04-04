import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
} satisfies Config
