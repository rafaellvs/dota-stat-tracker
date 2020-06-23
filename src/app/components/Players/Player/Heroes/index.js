import React from 'react'
import { useSelector } from 'react-redux'

import {
  isEmpty,
  getHeroImage,
  getHeroLocalizedName,
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import WinRate from 'app/components/WinRate'

import { Container, Hero } from './styled'

const Heroes = () => {
  const heroes = useSelector(state => state.players.selected.heroes)

  const columns = [
    'Hero',
    'Matches',
    'With',
    'Against',
  ]

  return !isEmpty(heroes) &&
    <Container>
      <Text component='h2'>
        most played
      </Text>
      <Text padding='1rem 0'>
        {`showing ${heroes.length} heroes`}
      </Text>

      <Table columns={columns}>
        {
          heroes.map(hero =>
            <tr key={hero.hero_id}>
              <Cell id='hero'>
                <Hero>
                  <Image src={getHeroImage(hero.hero_id)} />
                  <Text>{getHeroLocalizedName(hero.hero_id)}</Text>
                </Hero>
              </Cell>

              <Cell id='matches' width='1%'>
                <WinRate wins={hero.win} total={hero.games} />
              </Cell>

              <Cell id='with' width='1%'>
                <WinRate wins={hero.with_win} total={hero.with_games} />
              </Cell>

              <Cell id='against' width='1%'>
                <WinRate wins={hero.against_win} total={hero.against_games} />
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
}

export default Heroes
