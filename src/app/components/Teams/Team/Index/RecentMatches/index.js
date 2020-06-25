import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import More from 'app/components/More'

import { Container, Against } from './styled'

const RecentMatches = () => {
  const matches = useSelector(state => state.teams.selected.matches)

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
      <Text component='h2' padding='0 0 1rem 0'>
        recent matches
      </Text>

      <Table columns={columns}>
        {
          matches
            .filter((match, index) => index < 5)
            .map(match =>
              <tr
                key={match.match_id}
                onClick={() => handleClick(match.match_id)}
              >
                <Cell id='league'>
                  {match.league_name}
                </Cell>

                <Cell id='against'>
                  <Against>
                    <Image src={match.opposing_team_logo} />
                    <Text>{match.opposing_team_name}</Text>
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

      <More to='matches' />
    </Container>
  )
}

export default RecentMatches
