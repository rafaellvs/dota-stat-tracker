import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow.default};
  padding: 3rem;
`
