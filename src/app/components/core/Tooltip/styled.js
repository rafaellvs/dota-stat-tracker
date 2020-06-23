import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const TooltipContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 120%;
  left: -.5rem;
  padding: .5rem;
  opacity: 0;
  transition: opacity .3s;
  background: ${theme.colors.black};
  white-space: nowrap;
`

export const Container = styled.div`
  position: relative;

  &:hover ${TooltipContainer} {
    opacity: 1;
  }
`
