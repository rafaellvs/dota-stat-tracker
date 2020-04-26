import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import {
  getLobbyType,
  getGameMode,
  getGameDuration,
  getTimeElapsed
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Team from 'app/components/MatchResults/Team'

import { Container, Match } from './styled'

const PublicMatches = () => {
  const matches = useSelector(state => state.matches.items.publicMatches)

  const handleClick = id =>
    navigate(`/match/${id}`)

  return (
    <Container>
      <Text component='h1'>public matches</Text>
      {
        matches
          .filter((match, index) => index < 5)
          .map(match =>
            <Match
              key={match.match_id}
              onClick={() => handleClick(match.match_id)}
            >
              <Text>{match.match_id}</Text>

              <div>
                <Text>{getGameMode(match.game_mode)}</Text>
                <Text>{getLobbyType(match.lobby_type)}</Text>
                <Text>{`avg mmr: ${match.avg_mmr}`}</Text>
              </div>

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

              <Text>{getGameDuration(match.duration)}</Text>
              <Text>{getTimeElapsed(match.start_time)}</Text>
            </Match>
          )
      }
    </Container>
  )
}

export default PublicMatches
