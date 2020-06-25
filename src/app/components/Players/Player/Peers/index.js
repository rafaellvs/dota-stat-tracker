import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { isEmpty } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import WinRate from 'app/components/WinRate'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  PaginationContainer,
  Account,
} from './styled'

const Peers = () => {
  const allPeers = useSelector(state => state.players.selected.peers)
  const [peers, setPeers] = useState(allPeers.slice(0, 25))

  const columns = [
    'Friend',
    'With',
    'Against',
  ]

  const handleClick = id =>
    navigate(`/players/${id}`)

  return !isEmpty(peers) &&
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            friends
          </Text>
          <Text>
            {`showing ${peers.length} friends`}
          </Text>
        </div>

        <Pagination
          array={allPeers}
          setArray={setPeers}
        />
      </PaginationContainer>

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

              <Cell id='with' width='180px'>
                <WinRate
                  wins={peer.with_win}
                  total={peer.with_games}
                />
              </Cell>

              <Cell id='against' width='180px'>
                <WinRate
                  wins={peer.against_win}
                  total={peer.against_games}
                />
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
}

export default Peers
