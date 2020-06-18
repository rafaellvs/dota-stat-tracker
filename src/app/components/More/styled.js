import styled from 'styled-components'

import theme from 'app/helpers/theme'

import RouterLink from 'app/components/core/RouterLink'

export const Link = styled(RouterLink)`
  text-align: right;
  color: ${theme.colors.white};
  padding-top: 1rem;
  transition: color .3s;

  &:hover {
    color: ${theme.colors.hover};
    text-decoration: none;
  }
`
