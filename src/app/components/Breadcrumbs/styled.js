import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'block'};
  background: ${theme.colors.background};
  padding: 3rem 0 0 3rem;
  z-index: 1;
`
