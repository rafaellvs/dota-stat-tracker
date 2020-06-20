import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow};
  padding: 3rem;

  div {
    width: 100%;
  }
`
