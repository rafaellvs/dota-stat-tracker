import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getRadiantHeroes, getDireHeroes } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Team from '../Team'

import { Container, Match } from './styled'

const Results = () => {
  const matches = useSelector(state => state.matches.items.search)

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
            <Text component='h2'>
              Match {match.match_id}
            </Text>

            <Text component='h4'>Radiant:</Text>
            <Team heroes={getRadiantHeroes(match)} />

            <Text component='h4'>Dire:</Text>
            <Team heroes={getDireHeroes(match)} />
          </Match>
        )
      }
    </Container>
  )
}

export default Results
