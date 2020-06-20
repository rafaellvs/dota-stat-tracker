import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const Matches = ({ children }) =>
  <Container>
    {children}
  </Container>

Matches.propTypes = {
  children: PropTypes.node,
}

export default Matches
