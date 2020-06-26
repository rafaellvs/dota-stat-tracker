import React from 'react'
import PropTypes from 'prop-types'

import noPic from 'assets/images/no-pic.svg'

import { getPlayerDefaultPortrait } from 'app/helpers/utils'

import { StyledImage } from './styled'

const Image = ({ src, width, player }) => {
  const handleError = event => {
    event.target.src =
      player
        ? getPlayerDefaultPortrait()
        : noPic
  }

  return (
    <StyledImage
      src={src || noPic}
      width={width}
      onError={() => handleError(event)}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  player: PropTypes.bool,
}

export default Image
