import React from 'react'
import PropTypes from 'prop-types'

import { getHeroImage, getSlotColor, getPlayerItems } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import {
  Container,
  HeroPlayed,
  PlayerName,
  PlayerLink,
  Items,
  Inventory,
  Backpack
} from './styled'

const Team = ({ players }) => {
  const columns = [
    'Hero',
    'Level',
    'KDA',
    'CS',
    'Items'
  ]

  return (
    <Container>
      <Table columns={columns}>
        {
          players.map(player =>
            <tr key={player.hero_id}>
              <Cell id='hero'>
                <HeroPlayed>
                  <Image src={getHeroImage(player.hero_id)} />
                  <PlayerName color={getSlotColor(player.player_slot)} variant='hideOverflow'>
                    {
                      player.personaname
                        ? <PlayerLink to={`/player/${player.account_id}`}>{player.personaname}</PlayerLink>
                        : 'Anonymous'
                    }
                  </PlayerName>
                </HeroPlayed>
              </Cell>

              <Cell id='level'>
                {player.level}
              </Cell>

              <Cell id='kda'>
                {`${player.kills}-${player.deaths}-${player.assists}`}
              </Cell>

              <Cell id='cs'>
                {`${player.last_hits}/${player.denies}`}
              </Cell>

              <Cell id='items'>
                <Items>
                  <Inventory>
                    {
                      getPlayerItems(player).inventory
                        .map((item, index) =>
                          <Image
                            key={item + index}
                            src={item}
                          />
                        )
                    }
                  </Inventory>

                  <Backpack>
                    {
                      getPlayerItems(player).backpack
                        .map((item, index) =>
                          <Image
                            key={item + index}
                            src={item}
                          />
                        )
                    }
                  </Backpack>
                </Items>
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
  )
}

Team.propTypes = {
  players: PropTypes.array
}

export default Team
