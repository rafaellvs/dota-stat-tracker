import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const Players = ({ children }) =>
  <Container>
    {children}
  </Container>

Players.propTypes = {
  children: PropTypes.node,
}

export default Players
