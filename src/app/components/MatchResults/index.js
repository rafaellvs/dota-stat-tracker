import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSelectedMatch } from 'app/redux/actions/matches'

import { getHeroImage } from 'app/helpers/utils'

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
                        .map((player, index) =>
                          <Image src={getHeroImage(player.hero_id)} key={index} />
                        )
                    )
                    : (
                      match.teama.map(player =>
                        <Image src={getHeroImage(player)} key={player} />
                      )
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
                        .map((player, index) =>
                          <Image src={getHeroImage(player.hero_id)} key={index} />
                        )
                    )
                    : (
                      match.teamb.map(player =>
                        <Image src={getHeroImage(player)} key={player} />
                      )
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
