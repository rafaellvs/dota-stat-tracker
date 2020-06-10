import styled from 'styled-components'

import RouterLink from 'app/components/core/RouterLink'
import Text from 'app/components/core/Text'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem 0;
`

export const HeroPlayed = styled.div`
  display: flex;
  align-items: center;
  width: 180px;

  img {
    margin-right: 1rem;
  }
`

export const PlayerLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  transition: filter .3s;

  &:hover{
    filter: brightness(1.5);
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

  img {
    width: 40px;
  }
`

export const Backpack = styled.div`
  display: flex;
  min-width: 120px;
  min-height: 25px;

  img {
    width: 30px;
  }
`
