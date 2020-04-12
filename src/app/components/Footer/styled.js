import styled from 'styled-components'
import { Link as RouterLink } from '@reach/router'

import theme from 'app/helpers/theme'

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: ${theme.navbarHeight};
  background: ${theme.colors.background};
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: color .3s;

  &:hover {
    color: ${theme.colors.hover};
  }
`
