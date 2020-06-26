import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  PaginationContainer,
  Player,
} from './styled'

const ProPlayers = () => {
  const allPlayers = useSelector(state => state.players.items)
  const [players, setPlayers] = useState(allPlayers.slice(0, 25))

  const columns = [
    'Player',
    'Team',
    'Last Match',
  ]

  const handleClick = profile =>
    navigate(`/players/${profile.account_id}`)

  return (
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            pro players
          </Text>
          <Text>
            {`showing ${players.length} players`}
          </Text>
        </div>

        <Pagination
          array={allPlayers}
          setArray={setPlayers}
        />
      </PaginationContainer>

      <Table columns={columns}>
        {
          players.map(profile =>
            <tr
              key={profile.account_id}
              onClick={() => handleClick(profile)}
            >
              <Cell id='player' width='400px'>
                <Player>
                  <Image src={profile.avatarfull} />
                  <Text variant='hideOverflow'>
                    {profile.name}
                  </Text>
                </Player>
              </Cell>

              <Cell id='team'>
                {profile.team_name}
              </Cell>

              <Cell id='last-match' variant='lastCell'>
                {
                  // last_match_time coming in as ISO 8601 date
                  getTimeElapsed(
                    Date.parse(profile.last_match_time) / 1000
                  )
                }
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
  )
}

export default ProPlayers
