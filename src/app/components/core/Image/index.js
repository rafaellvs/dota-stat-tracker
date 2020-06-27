import React from 'react'
import PropTypes from 'prop-types'

import noPic from 'assets/images/no-pic.svg'

import { getPlayerDefaultPortrait } from 'app/helpers/utils'

import { StyledImage } from './styled'

const Image = ({ src, width, className, player, item }) => {
  const handleError = event => {
    event.target.src =
      player
        ? getPlayerDefaultPortrait()
        : item
          ? ''
          : noPic
  }

  return (
    <StyledImage
      src={src}
      width={width}
      className={className}
      onError={() => handleError(event)}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  player: PropTypes.bool,
  item: PropTypes.bool,
}

export default Image
