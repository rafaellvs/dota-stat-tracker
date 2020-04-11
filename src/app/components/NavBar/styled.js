import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

import theme from 'app/helpers/theme'

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  left: 0;
  height: 80px;
  background: ${theme.colors.background};
`

export const Link = styled(RouterLink)`
  color: white;
  font-size: 3rem;
  font-weight: bold;
  transition: color .3s;

  &:hover {
    color: black;
  }
`
