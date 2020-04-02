import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSelectedPlayer } from 'app/redux/actions/players'

import {
  SearchResults,
  SearchResult,
  Name,
  Avatar
} from './styled'

const PlayerResults = () => {
  const dispatch = useDispatch()
  const players = useSelector(state => state.players)

  return (
    <SearchResults>
      {
        players.items
          .filter((profile, index) => index < 10)
          .map(profile =>
            <SearchResult
              key={profile.account_id}
              onClick={() => dispatch(fetchSelectedPlayer(profile.account_id))}
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

export default PlayerResults
