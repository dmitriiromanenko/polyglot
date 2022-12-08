module.exports = {
  content: ['./*.html'],
  mode: 'jit',
  purge: [
    './*.html',
  ],
  theme: {
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightViolet: '#6931b066',
        lightGrey: '#efefef',
        violet: '#6931B0',
        lighterViolet: '#6931b01a',
        lighterGrey: '#ededed',
        veryLightGray: '#F7F7F7',
      },
    },
  },
  plugins: [],
}
