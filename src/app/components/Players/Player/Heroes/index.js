import React, { useState } from 'react'
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

import Pagination from 'app/components/Pagination'
import WinRate from 'app/components/WinRate'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  PaginationContainer,
  Hero,
} from './styled'

const Heroes = () => {
  const allHeroes = useSelector(state => state.players.selected.heroes)
  const [heroes, setHeroes] = useState(allHeroes.slice(0, 25))

  const columns = [
    'Hero',
    'Matches',
    'With',
    'Against',
  ]

  return !isEmpty(heroes) &&
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            heroes
          </Text>
          <Text>
            {`showing ${heroes.length} heroes`}
          </Text>
        </div>

        <Pagination
          array={allHeroes}
          setArray={setHeroes}
        />
      </PaginationContainer>

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

              <Cell id='matches' width='180px'>
                <WinRate
                  wins={hero.win}
                  total={hero.games}
                />
              </Cell>

              <Cell id='with' width='180px'>
                <WinRate
                  wins={hero.with_win}
                  total={hero.with_games}
                />
              </Cell>

              <Cell id='against' width='180px'>
                <WinRate
                  wins={hero.against_win}
                  total={hero.against_games}
                />
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
}

export default Heroes
