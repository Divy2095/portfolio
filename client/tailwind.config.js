/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F8F4EB',
        'paper-dark': '#F0EAD6',
        lavender: {
          DEFAULT: '#D6C5FF',
          light: '#E6DCFF',
          dark: '#BFA5FF',
        },
        'soft-pink': {
          DEFAULT: '#FFC9C7',
          light: '#FFE1E0',
          dark: '#FFA8A5',
        },
        'mint-green': {
          DEFAULT: '#B9F2C3',
          light: '#D7F8DD',
          dark: '#93E6A1',
        },
        'butter-yellow': {
          DEFAULT: '#FFE99A',
          light: '#FFF3C2',
          dark: '#FFDF70',
        },
        ink: {
          DEFAULT: '#29252B',
          soft: '#413C44',
        },
        muted: '#625C62',
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'Nunito', 'sans-serif'],
        hand: ['"Patrick Hand"', '"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        sketch: '3px 3px 0px #29252B',
        'sketch-lg': '5px 5px 0px #29252B',
        'sketch-xl': '7px 7px 0px #29252B',
        'sketch-sm': '2px 2px 0px #29252B',
        'sketch-hover': '1px 1px 0px #29252B',
      },
      borderRadius: {
        'sketch-sm': '255px 15px 225px 15px/15px 225px 15px 255px',
        'sketch-md': '240px 20px 230px 20px/20px 230px 20px 240px',
        'sketch-lg': '255px 25px 225px 25px/25px 225px 25px 255px',
      },
    },
  },
  plugins: [],
}
