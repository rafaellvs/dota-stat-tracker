import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'

import { Container, Match } from './styled'

const ProMatches = ({ matches }) => {
  const handleClick = id =>
    navigate(`/match/${id}`)

  return (
    <Container>
      <Text component='h1'>pro matches</Text>
      {
        matches
          .filter((match, index) => index < 5)
          .map(match =>
            <Match
              key={match.match_id}
              onClick={() => handleClick(match.match_id)}
            >
              <div>
                <Text>{match.match_id}</Text>
                <Text>{match.league_name}</Text>
              </div>

              <Text>
                {match.radiant_name}
                <br />vs<br />
                {match.dire_name}
              </Text>

              <Text>{getGameDuration(match.duration)}</Text>
              <Text>{getTimeElapsed(match.start_time)}</Text>
            </Match>
          )
      }
    </Container>
  )
}

ProMatches.propTypes = {
  matches: PropTypes.array
}

export default ProMatches
