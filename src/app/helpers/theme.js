const colors = {
  // background: 'rgba(66, 66, 66, .9)',
  background: 'rgba(0, 0, 0, .9)',
  inactiveTab: 'rgba(0, 0, 0, .6)',
  hover: '#878080',
  black: 'black',
  white: 'white',
  green: '#03ff1c',
  red: 'red'
}

const variants = {
  hideOverflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },

  win: {
    color: colors.green
  },

  loss: {
    color: colors.red
  }
}

const navbarHeight = '55px'

const theme = {
  colors,
  variants,
  navbarHeight
}

export default theme
