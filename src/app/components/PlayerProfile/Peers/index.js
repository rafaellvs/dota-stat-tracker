import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import WinRate from 'app/components/WinRate'

import { Container, Peer, Account } from './styled'

const Peers = () => {
  const peers = useSelector(state => state.players.selected.peers)

  const handleClick = id =>
    navigate(`/player/${id}`)

  return (
    <Container>
      <Text component='h2'>
        friends
      </Text>
      {
        peers
          .filter((peer, index) => index < 5)
          .map(peer =>
            <Peer
              key={peer.account_id}
              onClick={() => handleClick(peer.account_id)}
            >
              <Account>
                <Image src={peer.avatar} />
                <Text variant='hideOverflow'>{peer.personaname}</Text>
              </Account>

              <WinRate wins={peer.with_win} total={peer.with_games} />
            </Peer>
          )
      }
    </Container>
  )
}

export default Peers
