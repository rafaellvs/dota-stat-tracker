import styled from 'styled-components'

import theme from 'app/helpers/theme'

import Image from 'app/components/core/Image'
import CoreLink from 'app/components/core/Link'

export const Container = styled.div`
  background: ${theme.colors.background};
  padding: 2rem;
`

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export const Avatar = styled(Image)`
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

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MostPlayed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MostPlayedHero = styled(Image)`
  width: 50px;
`

export const Rank = styled.div``

export const Star = styled(Image)`
  width: 150px;
  position: absolute;
`

export const Medal = styled(Image)`
  width: 150px;
`

export const RecentMatches = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
`

export const Match = styled.div`
  width: 110px;
  padding: 0 1rem;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`
