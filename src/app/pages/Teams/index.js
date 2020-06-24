import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

const TeamsPage = ({ children }) =>
  <Container>
    {children}
  </Container>

TeamsPage.propTypes = {
  children: PropTypes.node,
}

export default TeamsPage
