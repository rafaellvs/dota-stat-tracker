import React from 'react'
import PropTypes from 'prop-types'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import heroes from 'app/helpers/heroes'
import { getMatch } from 'app/helpers/requests'

import {
  Match,
  RadiantHeroes,
  DireHeroes
} from './styled'

const MatchResult = ({ result, setResult }) => {
  return (
    <Match onClick={() => getMatch(result.matchResult.match_id, setResult)}>
      <Text component='h2'>
        Match {result.matchResult.match_id}
      </Text>

      <Text component='h4'>
        Radiant:
      </Text>
      <RadiantHeroes>
        {
          result.matchResult.players
            .filter((player, index) => index < 5)
            .map((player, index) => {
              const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

              return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
            })
        }
      </RadiantHeroes>

      <Text component='h4'>
        Dire:
      </Text>
      <DireHeroes>
        {
          result.matchResult.players
            .filter((player, index) => index > 4)
            .map((player, index) => {
              const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

              return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
            })
        }
      </DireHeroes>
    </Match>
  )
}

MatchResult.propTypes = {
  result: PropTypes.object,
  setResult: PropTypes.func
}

export default MatchResult
