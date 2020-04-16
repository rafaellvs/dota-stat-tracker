import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { getGameDuration, getTimeElapsed } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import { Container, Match, MatchInfo } from './styled'

const RecentMatches = () => {
  const matches = useSelector(state => state.teams.selected.matches)

  const handleClick = id =>
    navigate(`/match/${id}`)

  return (
    <Container>
      {
        matches
          .filter((match, index) => index < 5)
          .map(match =>
            <Match
              key={match.match_id}
              onClick={() => handleClick(match.match_id)}
            >
              <Text>{match.league_name}</Text>

              <MatchInfo>
                <Image src={match.opposing_team_logo} />
                <Text>{match.opposing_team_name}</Text>

                <Text>
                  {
                    match.radiant ^ match.radiant_win
                      ? 'Lost Match'
                      : 'Won Match'
                  }
                </Text>

                <Text>{getGameDuration(match.duration)}</Text>
                <Text>{getTimeElapsed(match.start_time)}</Text>
              </MatchInfo>
            </Match>
          )
      }
    </Container>
  )
}

export default RecentMatches
