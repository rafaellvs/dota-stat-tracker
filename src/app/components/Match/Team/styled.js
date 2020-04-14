import styled from 'styled-components'

import theme from 'app/helpers/theme'

import RouterLink from 'app/components/core/RouterLink'
import Text from 'app/components/core/Text'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 0;
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  padding: .3rem 0;
  transition: background .3s;

  & *:not(img) {
    flex: 1;
  }

  &:hover {
    background: ${theme.colors.hover};
  }
`

export const PlayerLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  transition: color .3s;

  &:hover{
    color: ${theme.colors.hover};
  }
`

export const PlayerName = styled(Text)`
  color: ${({ color }) => color};
  font-weight: bold;
`

export const Items = styled.div``

export const Inventory = styled.div`
  display: flex;
  min-width: 240px;
  min-height: 30px;

  & img {
    width: 40px;
  }
`

export const Backpack = styled.div`
  display: flex;
  min-width: 120px;
  min-height: 25px;

  & img {
    width: 30px;
  }
`
