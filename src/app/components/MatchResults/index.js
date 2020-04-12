import React from 'react'
import { useSelector } from 'react-redux'

import Results from './Results'
import Result404 from 'app/components/Result404'

const MatchResults = () => {
  const matches = useSelector(state => state.matches.items)

  return (
    matches.length > 0
      ? <Results />
      : <Result404 />
  )
}

export default MatchResults
