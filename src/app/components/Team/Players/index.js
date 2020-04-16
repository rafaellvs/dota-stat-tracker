import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getPlayerImage } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import WinRate from 'app/components/WinRate'

import { Container, Player } from './styled'

const Players = () => {
  const players = useSelector(state => state.teams.selected.players)

  const handleClick = id =>
    navigate(`/player/${id}`)

  return (
    <Container>
      {
        players
          .filter(player => player.is_current_team_member)
          .map(player =>
            <Player
              key={player.account_id}
              onClick={() => handleClick(player.account_id)}
            >
              <Image src={getPlayerImage(player.account_id)} />
              <Text>{player.name}</Text>

              <WinRate wins={player.wins} total={player.games_played} />
            </Player>
          )
      }
    </Container>
  )
}

export default Players
