import React from 'react'
import PropTypes from 'prop-types'

import { Container, TooltipContainer } from './styled'

const Tooltip = ({ content, children }) => {
  return (
    <Container>
      <TooltipContainer>
        <span>{content}</span>
      </TooltipContainer>

      {children}
    </Container>
  )
}

Tooltip.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
}

export default Tooltip
