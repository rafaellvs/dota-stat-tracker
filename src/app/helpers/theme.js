const colors = {
  background: 'rgba(0, 0, 0, .9)',
  inactiveTab: 'rgba(0, 0, 0, .6)',
  hover: '#4f4f4f',
  black: 'black',
  white: 'white',
  green: '#03ff1c',
  darkgreen: 'green',
  red: 'red',
  blue: '#5647ff',
}

const variants = {
  hideOverflow: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  win: {
    color: colors.green,
  },
  loss: {
    color: colors.red,
  },
  lastCell: {
    width: '1%',
    whiteSpace: 'nowrap',
  },
}

const boxShadow = {
  default: '10px 30px 20px 10px rgba(0,0,0,0.75);',
  noBreadcrumbs: '10px 10px 20px 10px rgba(0,0,0,0.75);',
}

const navbarHeight = '55px'

const theme = {
  colors,
  variants,
  navbarHeight,
  boxShadow,
}

export default theme
