import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import Text from 'app/components/core/Text'

import {
  SearchResults,
  SearchResult,
  Avatar
} from './styled'

const PlayerResults = () => {
  const players = useSelector(state => state.players)

  return (
    <SearchResults>
      {
        players.items
          .filter((profile, index) => index < 10)
          .map(profile =>
            <SearchResult
              key={profile.account_id}
              onClick={() => navigate(`/player/${profile.account_id}`)}
            >
              <Avatar src={profile.avatarfull} />

              <Text variant='hideOverflow'>
                {profile.personaname}
              </Text>
            </SearchResult>
          )
      }

      {
        players.items.length === 0 &&
          <div style={{ padding: '3rem' }}>
            <h2>found nothing :(</h2>
          </div>
      }
    </SearchResults>
  )
}

export default PlayerResults
