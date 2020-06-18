import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSelectedPlayer } from 'app/redux/actions/players'

import { isEmpty } from 'app/helpers/utils'

import Overview from 'app/components/PlayerProfile/Overview'

import { Container } from './styled'

const Player = ({ id, children }) => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.players.selected)

  useEffect(() => {
    dispatch(fetchSelectedPlayer(id))
  }, [id])

  useEffect(() => scrollTo(0, 0))

  return !isEmpty(player) &&
    <Container>
      <Overview />

      {children}
    </Container>
}

Player.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}

export default Player
