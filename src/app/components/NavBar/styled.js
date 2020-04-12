import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

import theme from 'app/helpers/theme'

export const Container = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${theme.navbarHeight};
  padding: 0 6rem;
  background: ${theme.colors.background};
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0 2rem;
  transition: color .3s;

  &:hover {
    color: ${theme.colors.hover};
  }
`
