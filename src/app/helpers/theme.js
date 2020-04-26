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

const boxShadow = '10px 0px 20px 10px rgba(0,0,0,0.75);'

const theme = {
  colors,
  variants,
  navbarHeight,
  boxShadow
}

export default theme
