const colors = {
  background: 'lightgrey',
  hover: '#878080',
  black: 'black',
  white: 'white',
  green: 'green',
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

const theme = {
  colors,
  variants
}

export default theme
