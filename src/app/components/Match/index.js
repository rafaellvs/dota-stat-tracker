import React from 'react'
import { useSelector } from 'react-redux'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import heroes from 'app/helpers/heroes'

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
            .map((player, index) => {
              const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

              return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
            })
        }
      </Heroes>

      <Text component='h4'>
        Dire:
      </Text>
      <Heroes>
        {
          match.players
            .filter((player, index) => index > 4)
            .map((player, index) => {
              const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

              return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
            })
        }
      </Heroes>
    </FullMatch>
  )
}

export default Match
