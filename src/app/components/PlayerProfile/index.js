import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { isEmpty } from 'app/helpers/utils'
import { fetchSelectedPlayer } from 'app/redux/actions/players'

import Account from './Account'
import MostPlayed from './MostPlayed'
import Rank from './Rank'
import RecentMatches from './RecentMatches'

import { Container, Profile } from './styled'

const PlayerProfile = ({ id }) => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.players.selected)

  useEffect(() => {
    dispatch(fetchSelectedPlayer(id))
  }, [])

  return !isEmpty(player) &&
    <Container>
      <Profile>
        <Account />
        <MostPlayed />
        <Rank />
      </Profile>

      <RecentMatches />
    </Container>
}

PlayerProfile.propTypes = {
  id: PropTypes.string
}

export default PlayerProfile
