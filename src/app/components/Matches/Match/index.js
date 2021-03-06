import React from 'react'
import { useSelector } from 'react-redux'

import {
  getRadiantPlayers,
  getDirePlayers,
  getGameDuration,
  getGameMode,
  getLobbyType,
  getTimeElapsed,
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'

import Team from './Team'

import { Container, Teams } from './styled'

const Match = () => {
  const match = useSelector(state => state.matches.selected)

  return (
    <Container>
      <Text component='h1'>
        Match {match.match_id}
      </Text>
      <Text padding='.5rem 0'>
        {getTimeElapsed(match.start_time)}
      </Text>
      <Text component='h2' variant={match.radiant_win ? 'win' : 'loss'}>
        {
          match.radiant_win
            ? 'Radiant Victory'
            : 'Dire Victory'
        }
      </Text>
      <Text component='h2' padding='0 0 .5rem 0'>
        {`${match.radiant_score} - ${match.dire_score}`}
      </Text>

      <Text>{getGameDuration(match.duration)}</Text>
      <Text padding='.3rem 0'>
        {getGameMode(match.game_mode)}
      </Text>
      <Text>{getLobbyType(match.lobby_type)}</Text>

      <Teams>
        <Text component='h4'>Radiant:</Text>
        <Team players={getRadiantPlayers(match.players)} />

        <Text component='h4'>Dire:</Text>
        <Team players={getDirePlayers(match.players)} />
      </Teams>
    </Container>
  )
}

export default Match
