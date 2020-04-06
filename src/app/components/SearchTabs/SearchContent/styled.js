import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.colors.background};
  width: 500px;
  max-height: 500px;
  overflow-y: scroll;
`
