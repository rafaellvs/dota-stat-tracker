import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getPlayerImage } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import WinRate from 'app/components/WinRate'
import More from 'app/components/More'

import {
  Container,
  TeamPlayers,
  Player,
} from './styled'

const Players = () => {
  const players = useSelector(state => state.teams.selected.players)

  const handleClick = id =>
    navigate(`/players/${id}`)

  return (
    <Container>
      <Text component='h2' padding='0 0 1rem 0'>
        players
      </Text>

      <TeamPlayers>
        {
          players
            .filter(player => player.is_current_team_member)
            .map(player =>
              <Player
                key={player.account_id}
                onClick={() => handleClick(player.account_id)}
              >
                <Image src={getPlayerImage(player.account_id)} />
                <Text padding='.5rem 0 0 0'>
                  {player.name}
                </Text>

                <WinRate wins={player.wins} total={player.games_played} />
              </Player>
            )
        }
      </TeamPlayers>

      <More to='players' />
    </Container>
  )
}

export default Players
