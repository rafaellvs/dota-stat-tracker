import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  padding: 3rem;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow};
`

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
