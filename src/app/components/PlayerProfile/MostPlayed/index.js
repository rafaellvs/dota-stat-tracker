import React from 'react'
import { useSelector } from 'react-redux'

import { getHeroImage } from 'app/helpers/utils'

import { Container, Hero } from './styled'

const MostPlayed = () => {
  const heroes = useSelector(state => state.players.selected.heroes)

  return (
    <Container>
      {
        heroes
          .filter((hero, index) => index < 5)
          .map(hero =>
            <Hero
              key={hero.hero_id}
              src={getHeroImage(hero.hero_id)}
            />
          )
      }
    </Container>
  )
}

export default MostPlayed
