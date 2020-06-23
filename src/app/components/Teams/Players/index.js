import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getPlayerImage } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import WinRate from 'app/components/WinRate'

import {
  Container,
  TeamPlayers,
  Player,
} from './styled'

const Players = () => {
  const players = useSelector(state => state.teams.selected.players)

  const current = players.filter(player => player.is_current_team_member)
  const old = players.filter(player => !player.is_current_team_member)

  const handleClick = id =>
    navigate(`/players/${id}`)

  return (
    <Container>
      <Text component='h1'>
        players
      </Text>

      <Text component='h3' padding='2rem 0'>
        current
      </Text>
      <TeamPlayers>
        {
          current.map(player =>
            <Player
              key={player.account_id}
              onClick={() => handleClick(player.account_id)}
            >
              <Image src={getPlayerImage(player.account_id)} />
              <Text padding='.5rem 0 0 0'>
                {player.name}
              </Text>

              <WinRate
                wins={player.wins}
                total={player.games_played}
              />
            </Player>
          )
        }
      </TeamPlayers>

      <Text component='h2' padding='2rem 0'>
        old
      </Text>
      <TeamPlayers>
        {
          old.map(player =>
            <Player
              key={player.account_id}
              onClick={() => handleClick(player.account_id)}
            >
              <Image src={getPlayerImage(player.account_id)} />
              <Text padding='.5rem 0 0 0'>
                {player.name}
              </Text>

              <WinRate
                wins={player.wins}
                total={player.games_played}
              />
            </Player>
          )
        }
      </TeamPlayers>
    </Container>
  )
}

export default Players
