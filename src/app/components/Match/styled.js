import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow};
`

export const Teams = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
