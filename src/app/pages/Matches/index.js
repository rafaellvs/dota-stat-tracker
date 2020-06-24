import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const MatchesPage = ({ children }) =>
  <Container>
    {children}
  </Container>

MatchesPage.propTypes = {
  children: PropTypes.node,
}

export default MatchesPage
