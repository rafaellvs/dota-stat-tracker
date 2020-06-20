import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import { Container } from './styled'

const ProMatches = () => {
  const matches = useSelector(state => state.matches.items.proMatches)

  const columns = [
    'League',
    'Teams',
    'Duration',
    'When',
  ]

  const handleClick = id =>
    navigate(`/match/${id}`)

  return (
    <Container>
      <Text component='h1'>
        pro matches
      </Text>
      <Text padding='1rem 0'>
        {`showing ${matches.length} matches`}
      </Text>

      <Table columns={columns}>
        {
          matches.map(match =>
            <tr
              key={match.match_id}
              onClick={() => handleClick(match.match_id)}
            >
              <Cell id='league'>
                <div>
                  <Text>{match.league_name}</Text>
                  <Text>{match.match_id}</Text>
                </div>
              </Cell>

              <Cell id='teams'>
                {`${match.radiant_name} vs ${match.dire_name}`}
              </Cell>

              <Cell id='duration'>
                {getGameDuration(match.duration)}
              </Cell>

              <Cell id='when'>
                {getTimeElapsed(match.start_time)}
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
  )
}

export default ProMatches
