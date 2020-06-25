import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPublicMatches } from 'app/redux/actions/matches'

import { isEmpty } from 'app/helpers/utils'

import PublicMatches from 'app/components/Matches/PublicMatches'

const ProMatchesPage = () => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches.items.publicMatches)

  useEffect(() => {
    dispatch(fetchPublicMatches())
  }, [])

  return !isEmpty(matches) &&
    <PublicMatches />
}

export default ProMatchesPage
