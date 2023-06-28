import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'
import daisyui from 'daisyui'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      // colors: {
      //   primary: defaultTheme.colors.green,
      // },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
} satisfies Config
