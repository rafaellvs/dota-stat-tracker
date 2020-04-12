import React from 'react'
import { useSelector } from 'react-redux'

import Results from './Results'
import Result404 from 'app/components/Result404'

const PlayerResults = () => {
  const players = useSelector(state => state.players.items)

  return (
    players.length > 0
      ? <Results />
      : <Result404 />
  )
}

export default PlayerResults
