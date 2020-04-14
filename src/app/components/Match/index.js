import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {
  isEmpty,
  getRadiantPlayers,
  getDirePlayers,
  getGameDuration,
  getGameMode,
  getLobbyType,
} from 'app/helpers/utils'
import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Text from 'app/components/core/Text'

import Team from './Team'

import { Container, Teams } from './styled'

const Match = ({ id }) => {
  const dispatch = useDispatch()
  const match = useSelector(state => state.matches.selected)

  useEffect(() => {
    dispatch(fetchSelectedMatch(id))
  }, [])

  return !isEmpty(match) &&
    <Container>
      <Text component='h1'>
        Match {match.match_id}
      </Text>

      <>
        <Text component='h2'>{`${match.radiant_score} - ${match.dire_score}`}</Text>
        <Text>{getGameDuration(match.duration)}</Text>
        <Text>{getGameMode(match.game_mode)}</Text>
        <Text>{getLobbyType(match.lobby_type)}</Text>
      </>

      <Teams>
        <Text component='h4'>Radiant:</Text>
        <Team players={getRadiantPlayers(match.players)} />

        <Text component='h4'>Dire:</Text>
        <Team players={getDirePlayers(match.players)} />
      </Teams>
    </Container>
}

Match.propTypes = {
  id: PropTypes.string
}

export default Match
