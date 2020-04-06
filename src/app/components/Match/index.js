import React from 'react'
import { useSelector } from 'react-redux'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import { getHeroImage } from 'app/helpers/utils'

import {
  FullMatch,
  Heroes
} from './styled'

const Match = () => {
  const match = useSelector(state => state.matches.selected)

  return (
    <FullMatch>
      <Text component='h2'>
        Match {match.match_id}
      </Text>

      <Text component='h4'>
        Radiant:
      </Text>
      <Heroes>
        {
          match.players
            .filter((player, index) => index < 5)
            .map((player, index) =>
              <Image src={getHeroImage(player.hero_id)} key={index} />
            )
        }
      </Heroes>

      <Text component='h4'>
        Dire:
      </Text>
      <Heroes>
        {
          match.players
            .filter((player, index) => index > 4)
            .map((player, index) =>
              <Image src={getHeroImage(player.hero_id)} key={index} />
            )
        }
      </Heroes>
    </FullMatch>
  )
}

export default Match
