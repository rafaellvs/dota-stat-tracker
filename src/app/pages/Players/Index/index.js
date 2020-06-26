import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProPlayers } from 'app/redux/actions/players'

import { isEmpty } from 'app/helpers/utils'

import PlayersIndex from 'app/components/Players/Index'

const Index = () => {
  const dispatch = useDispatch()
  const players = useSelector(state => state.players.items)

  useEffect(() => {
    dispatch(fetchProPlayers())
  }, [])

  return !isEmpty(players) &&
    <PlayersIndex />
}

export default Index
