import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProMatches } from 'app/redux/actions/matches'

import { isEmpty } from 'app/helpers/utils'

import ProMatches from 'app/components/Matches/ProMatches'

const ProMatchesPage = () => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches.items.proMatches)

  useEffect(() => {
    dispatch(fetchProMatches())
  }, [])

  return !isEmpty(matches) &&
    <ProMatches />
}

export default ProMatchesPage
