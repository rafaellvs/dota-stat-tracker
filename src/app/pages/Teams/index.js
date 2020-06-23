import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const Teams = ({ children }) =>
  <Container>
    {children}
  </Container>

Teams.propTypes = {
  children: PropTypes.node,
}

export default Teams
