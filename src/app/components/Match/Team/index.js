import React from 'react'
import PropTypes from 'prop-types'

import { getHeroImage, getSlotColor, getPlayerItems } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'

import {
  Container,
  Hero,
  PlayerName,
  PlayerLink,
  Items,
  Inventory,
  Backpack
} from './styled'

const Team = ({ players }) =>
  <Container>
    {
      players.map(player =>
        <Hero key={player.hero_id}>
          <Image src={getHeroImage(player.hero_id)} />
          <PlayerName color={getSlotColor(player.player_slot)}>
            {
              player.personaname
                ? <PlayerLink to={`/player/${player.account_id}`}>{player.personaname}</PlayerLink>
                : 'Anonymous'
            }
          </PlayerName>

          <Text>{player.level}</Text>

          <Text>{`${player.kills} - ${player.deaths} - ${player.assists}`}</Text>

          <Text>{`${player.last_hits}/${player.denies}`}</Text>

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
        </Hero>
      )
    }
  </Container>

Team.propTypes = {
  players: PropTypes.array
}

export default Team
