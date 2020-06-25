import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  PaginationContainer,
  Against,
} from './styled'

const RecentMatches = () => {
  const allMatches = useSelector(state => state.teams.selected.matches)
  const [matches, setMatches] = useState(allMatches.slice(0, 25))

  const columns = [
    'League',
    'Against',
    'Result',
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
            matches
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
              <Cell id='league' width='300px'>
                <Text variant='hideOverflow'>
                  {match.league_name}
                </Text>
              </Cell>

              <Cell id='against' width='300px'>
                <Against>
                  <Image src={match.opposing_team_logo} />
                  <Text variant='hideOverflow'>
                    {match.opposing_team_name}
                  </Text>
                </Against>
              </Cell>

              <Cell id='result'>
                {
                  match.radiant ^ match.radiant_win
                    ? <Text variant='loss'>lost match</Text>
                    : <Text variant='win'>won match</Text>
                }
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

export default RecentMatches
