import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import {
  getLobbyType,
  getGameMode,
  getGameDuration,
  getTimeElapsed,
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Team from 'app/components/MatchResults/Team'
import More from 'app/components/More'

import { Container } from './styled'

const PublicMatches = () => {
  const matches = useSelector(state => state.matches.items.publicMatches)

  const columns = [
    'Match ID',
    'Info',
    'Radiant / Dire',
    'Duration',
    'When',
  ]

  const handleClick = id =>
    navigate(`/matches/${id}`)

  return (
    <Container>
      <Text component='h1' padding='0 0 1rem 0'>
        public matches
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
                <Cell id='id'>
                  {match.match_id}
                </Cell>

                <Cell id='info'>
                  <div>
                    <Text>{getGameMode(match.game_mode)}</Text>
                    <Text>{getLobbyType(match.lobby_type)}</Text>
                    <Text>{`avg mmr: ${match.avg_mmr}`}</Text>
                  </div>
                </Cell>

                <Cell id='sides'>
                  <div>
                    <Team heroes={
                      match.radiant_team
                        .split(',')
                        .map(hero => parseInt(hero))
                    }
                    />

                    <Team heroes={
                      match.dire_team
                        .split(',')
                        .map(hero => parseInt(hero))
                    }
                    />
                  </div>
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

      <More to='publicmatches' />
    </Container>
  )
}

export default PublicMatches
