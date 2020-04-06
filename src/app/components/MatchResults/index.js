import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import heroes from 'app/helpers/heroes'
import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import {
  SearchResults,
  Match,
  RadiantHeroes,
  DireHeroes
} from './styled'

const MatchResults = () => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches)

  return (
    <SearchResults>
      {
        matches.items.map(match =>
          !match.error &&
            <Match
              key={match.match_id}
              onClick={() => dispatch(fetchSelectedMatch(match.match_id))}
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
                    ? (
                      match.players
                        .filter((player, index) => index < 5)
                        .map((player, index) => {
                          const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

                          return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
                        })
                    )
                    : (
                      match.teama.map(player => {
                        const heroName = heroes.find(h => h.id === parseInt(player)).name

                        return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={player} />
                      })
                    )
                }
              </RadiantHeroes>

              <Text component='h4'>
                Dire:
              </Text>
              <DireHeroes>
                {
                  match.players
                    ? (
                      match.players
                        .filter((player, index) => index > 4)
                        .map((player, index) => {
                          const heroName = heroes.find(h => h.id === parseInt(player.hero_id)).name

                          return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={index} />
                        })
                    )
                    : (
                      match.teamb.map(player => {
                        const heroName = heroes.find(h => h.id === parseInt(player)).name

                        return <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={player} />
                      })
                    )
                }
              </DireHeroes>
            </Match>
        )
      }
    </SearchResults>
  )
}

export default MatchResults
