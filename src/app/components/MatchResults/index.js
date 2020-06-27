import React from 'react'
import { useSelector } from 'react-redux'

import { isEmpty } from 'app/helpers/utils'

import Results from './Results'
import Result404 from 'app/components/Result404'

const MatchResults = () => {
  const matches = useSelector(state => state.matches.items.search)

  return (
    !isEmpty(matches)
      ? <Results />
      : <Result404 />
  )
}

export default MatchResults
