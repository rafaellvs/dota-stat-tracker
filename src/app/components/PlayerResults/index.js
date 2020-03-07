import React from 'react'
import PropTypes from 'prop-types'

import { getPlayer } from 'app/helpers/requests'

import {
  SearchResults,
  SearchResult,
  Name,
  Avatar
} from './styled'

const PlayerResults = ({ result, setResult }) => {
  return (
    <SearchResults>
      {
        result.players
          .filter((profile, index) => index < 10)
          .map(profile =>
            <SearchResult
              key={profile.account_id}
              onClick={() => getPlayer(profile.account_id, setResult)}
            >
              <Avatar src={profile.avatarfull} />

              <Name>
                {profile.personaname}
              </Name>
            </SearchResult>
          )
      }
    </SearchResults>
  )
}

PlayerResults.propTypes = {
  result: PropTypes.object,
  setResult: PropTypes.func
}

export default PlayerResults
