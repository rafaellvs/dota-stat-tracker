import styled from 'styled-components'

import CoreImage from 'app/components/core/Image'
import CoreLink from 'app/components/core/Link'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 3rem;
`

export const Account = styled.div`
  text-align: center;

  p {
    padding: .5rem 0;
  }
`

export const Avatar = styled(CoreImage)`
  width: 150px;
`

export const Link = styled(CoreLink)`
  color: ${theme.colors.white};
  transition: color .3s;

  &:hover {
    color: ${theme.colors.hover};
    text-decoration: none;
  }
`
