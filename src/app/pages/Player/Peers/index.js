import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { isEmpty } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import WinRate from 'app/components/WinRate'

import { Container, Account } from './styled'

const Peers = () => {
  const peers = useSelector(state => state.players.selected.peers)

  const columns = [
    'Friend',
    'With',
    'Against',
  ]

  const handleClick = id =>
    navigate(`/players/${id}`)

  return !isEmpty(peers) &&
    <Container>
      <Text component='h2'>
        friends
      </Text>
      <Text padding='1rem 0'>
        {`showing ${peers.length} friends`}
      </Text>

      <Table columns={columns}>
        {
          peers.map(peer =>
            <tr
              key={peer.account_id}
              onClick={() => handleClick(peer.account_id)}
            >
              <Cell id='friend'>
                <Account>
                  <Image src={peer.avatar} />
                  <Text variant='hideOverflow'>{peer.personaname}</Text>
                </Account>
              </Cell>

              <Cell id='with'>
                <WinRate wins={peer.with_win} total={peer.with_games} />
              </Cell>

              <Cell id='against'>
                <WinRate wins={peer.against_win} total={peer.against_games} />
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
}

export default Peers
