import React from 'react'
import PropTypes from 'prop-types'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import heroes from 'app/helpers/heroes'

import {
  FullMatch,
  Heroes
} from './styled'

const Match = ({ result }) =>
  <FullMatch>
    <Text component='h2'>
      Match {result.match.match_id}
    </Text>

    <Text component='h4'>
      Radiant:
    </Text>
    <Heroes>
      {
        result.match.players
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
        result.match.players
          .filter((player, index) => index > 4)
          .map((player, index) => {
            const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

            return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
          })
      }
    </Heroes>
  </FullMatch>

Match.propTypes = {
  result: PropTypes.object
}

export default Match
