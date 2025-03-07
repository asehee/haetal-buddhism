// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'win98': {
          'gray': '#c0c0c0',
          'darkgray': '#808080',
          'shadow': '#404040',
          'highlight': '#ffffff',
          'blue': '#000080',
          'lightblue': '#1084d0',
          'teal': '#008080',
          'royal': '#0000ff',
          'orange': '#FFA500',
          'desktop': '#008080',
          'border': '#87888f',
          'text': '#000000',
          'title': '#ffffff',
        },
      },
      fontFamily: {
        'win98': ['MS Sans Serif', 'Tahoma', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'win-gradient': 'linear-gradient(to right, #000080, #1084d0)',
        'stars': `
          radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 8px),
          radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px),
          radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 10px)
        `,
      },
      backgroundSize: {
        'stars': '550px 550px, 350px 350px, 250px 250px',
      },
      backgroundPosition: {
        'stars': '0 0, 40px 60px, 130px 270px',
      },
      boxShadow: {
        'win98-out': 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        'win98-in': 'inset -1px -1px #dfdfdf, inset 1px 1px #0a0a0a, inset -2px -2px #ffffff, inset 2px 2px #808080',
        'win98-btn': 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        'win98-btn-pressed': 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
        'win98-window': '2px 2px 0 0 rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  corePlugins: {
    padding: true,
    margin: true,
    display: true,
    flexDirection: true,
    alignItems: true,
    justifyContent: true,
    backgroundColor: true,
    textColor: true,
    borderColor: true,
    borderWidth: true,
    borderRadius: true,
    width: true,
    height: true,
    cursor: true,
    fontWeight: true,
    overflow: true,
    position: true,
    zIndex: true,
    gap: true,
  },
  plugins: [],
  safelist: [
    'p-0', 'm-0', 'flex', 'items-center', 'justify-center', 'justify-between',
    'flex-col', 'w-full', 'h-full', 'text-xs', 'text-white', 'font-bold',
    'bg-black', 'bg-win98-gray', 'bg-win98-blue', 'bg-win98-desktop',
    'border', 'border-win98-highlight', 'border-win98-shadow',
    'shadow-win98-in', 'shadow-win98-out', 'shadow-win98-btn', 'shadow-win98-window',
    'cursor-pointer', 'overflow-hidden', 'overflow-auto'
  ]
} as any as Config;

export default config