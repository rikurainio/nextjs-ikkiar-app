module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,html,css}',
           './components/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1600px'
    },
    colors: {
      'ikkiarMain': '#00caa4',
      'ikkiarDark': '#13ce66',
      'ikkiarBright': '#13ce66',

      'ikkiarDark2': '#45a390',

      'ikkiarWhite': '#ffffff',
      'ikkiarBgGray1': '#ebeef1',
      'ikkiarBgGray2': '#f7f7f9',
      'ikkiarBgGray3': '#cccccc',
      'ikkiarLineGray': '#ffffff',

      'grayDetailText': '#9e9e9e',

      'rw': '#ffe7e6',
      'discord': '#5865f2',

      'red': '#ee3e38',
      'blue': '#1fb6ff',
      'purple': '#7e5bef', 
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      scale: {
        '10': '0.32',
        'champIcon': '0.5',
        '102': '1.02',
        '105': '1.05',
      },
      visibility: ["group-hover"],
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'discord': '0.3rem',
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
