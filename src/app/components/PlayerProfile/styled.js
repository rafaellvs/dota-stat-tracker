import styled from 'styled-components'

import CoreImage from 'app/components/core/Image'
import CoreText from 'app/components/core/Text'

export const Container = styled.div`
  background: lightgrey;
  padding: 2rem;
`

export const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export const Avatar = styled(CoreImage)`
  width: 150px;
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

export const MostPlayedHero = styled(CoreImage)`
  width: 50px;
`

export const Rank = styled.div``

export const Star = styled.img`
  width: 150px;
  position: absolute;
`

export const Medal = styled.img`
  width: 150px;
`

export const RecentMatches = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
`

export const Match = styled.div`
  width: 90px;
  padding: 0 1rem;

  &:hover {
    background-color: #878080;
    cursor: pointer;
  }
`

export const HeroName = styled(CoreText)`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const TextWon = styled(CoreText)`
  color: green;
`

export const TextLost = styled(CoreText)`
  color: red;
`
