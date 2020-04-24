import React from 'react'
import { useSelector } from 'react-redux'

import { getHeroImage } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import WinRate from 'app/components/WinRate'

import { Container, Hero } from './styled'

const MostPlayed = () => {
  const heroes = useSelector(state => state.players.selected.heroes)

  return (
    <Container>
      <Text component='h2'>
        most played
      </Text>

      {
        heroes
          .filter((hero, index) => index < 5)
          .map(hero =>
            <Hero key={hero.hero_id}>
              <Image src={getHeroImage(hero.hero_id)} />
              <WinRate wins={hero.win} total={hero.games} />
            </Hero>
          )
      }
    </Container>
  )
}

export default MostPlayed
