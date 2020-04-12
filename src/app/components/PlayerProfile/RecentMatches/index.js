import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getHeroImage, getHeroName } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'

import { Container, Match } from './styled'

const RecentMatches = () => {
  const matches = useSelector(state => state.players.selected.matches)

  const handleClick = match =>
    navigate(`/match/${match.match_id}`)

  return (
    <Container>
      {
        matches.map(match =>
          <Match
            key={match.match_id}
            onClick={() => handleClick(match)}
          >
            <Image src={getHeroImage(match.hero_id)} />

            <Text component='h5' variant='hideOverflow'>
              {getHeroName(match.hero_id)}
            </Text>

            <Text>
              {`${match.kills}-${match.deaths}-${match.assists}`}
            </Text>

            {
              match.player_slot < 5 ^ match.radiant_win
                ? <Text variant='loss'>lost match</Text>
                : <Text variant='win'>won match</Text>
            }
          </Match>
        )
      }
    </Container>
  )
}

export default RecentMatches
