import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const PlayersPage = ({ children }) =>
  <Container>
    {children}
  </Container>

PlayersPage.propTypes = {
  children: PropTypes.node,
}

export default PlayersPage
