import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import heroes from 'app/helpers/heroes'
import { receiveSelectedMatch } from 'app/redux/actions/matches'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import {
  SearchResults,
  Match,
  RadiantHeroes,
  DireHeroes
} from './styled'

const MatchResults = () => {
  const [noResults, setNoResults] = useState(true)
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches)

  return (
    <SearchResults>
      {
        matches.items.map(match =>
          !match.error &&
          setNoResults(false) &&
            <Match
              key={match.match_id}
              onClick={() => dispatch(receiveSelectedMatch(match))}
            >
              <Text component='h2'>
                Match {match.match_id}
              </Text>

              <Text component='h4'>
                Radiant:
              </Text>
              <RadiantHeroes>
                {
                  match.players
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
                  match.players
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

      {
        noResults &&
          <div>
            found nothing :(
          </div>
      }
    </SearchResults>
  )
}

export default MatchResults
