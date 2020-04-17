import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { isEmpty } from 'app/helpers/utils'
import { fetchAllMatches } from 'app/redux/actions/matches'

import ProMatches from './ProMatches'
import PublicMatches from './PublicMatches'

import { Container } from './styled'

const Matches = () => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches.items)

  useEffect(() => {
    dispatch(fetchAllMatches())
  }, [])

  return (
    !isEmpty(matches.proMatches) &&
    !isEmpty(matches.publicMatches) &&
      <Container>
        <ProMatches matches={matches.proMatches} />
        <PublicMatches matches={matches.publicMatches} />
      </Container>
  )
}

export default Matches
