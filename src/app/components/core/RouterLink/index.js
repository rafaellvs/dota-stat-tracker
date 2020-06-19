import styled from 'styled-components'
import { Link } from '@reach/router'

import theme from 'app/helpers/theme'

const RouterLink = styled(Link)`
  color: ${theme.colors.white};
  transition: color .3s;

  &:hover {
    color: ${theme.colors.hover};
    text-decoration: none;
  }
`

export default RouterLink
