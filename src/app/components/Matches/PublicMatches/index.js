import React, { useState } from 'react'
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

import Pagination from 'app/components/Pagination'
import Team from 'app/components/MatchResults/Team'
import BackToTop from 'app/components/BackToTop'

import { Container, PaginationContainer } from './styled'

const PublicMatches = () => {
  const allMatches = useSelector(state => state.matches.items.publicMatches)
  const [matches, setMatches] = useState(allMatches.slice(0, 25))

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
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            public matches
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
              <Cell id='id'>
                {match.match_id}
              </Cell>

              <Cell id='info'>
                <Text>{getGameMode(match.game_mode)}</Text>
                <Text>{getLobbyType(match.lobby_type)}</Text>
                <Text>{`avg mmr: ${match.avg_mmr}`}</Text>
              </Cell>

              <Cell id='sides'>
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

export default PublicMatches
