import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import BackToTop from 'app/components/BackToTop'

import { Container, PaginationContainer } from './styled'

const ProMatches = () => {
  const allMatches = useSelector(state => state.matches.items.proMatches)
  const [matches, setMatches] = useState(allMatches.slice(0, 25))

  const columns = [
    'League',
    'Teams',
    'Duration',
    'When',
  ]

  const handleClick = id =>
    navigate(`/matches/${id}`)

  return (
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            pro matches
          </Text>
          <Text>
            {`showing ${matches.length} matches`}
          </Text>
        </div>

        <Pagination
          array={allMatches}
          setArray={setMatches}
        />
      </PaginationContainer>

      <Table columns={columns}>
        {
          matches.map(match =>
            <tr
              key={match.match_id}
              onClick={() => handleClick(match.match_id)}
            >
              <Cell id='league' width='350px'>
                <Text variant='hideOverflow'>
                  {match.league_name}
                </Text>
              </Cell>

              <Cell id='teams' width='350px'>
                <Text variant='hideOverflow'>
                  {`${match.radiant_name} vs ${match.dire_name}`}
                </Text>
              </Cell>

              <Cell id='duration'>
                {getGameDuration(match.duration)}
              </Cell>

              <Cell id='when' variant='lastCell'>
                {getTimeElapsed(match.start_time)}
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
  )
}

export default ProMatches
