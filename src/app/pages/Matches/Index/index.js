import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllMatches } from 'app/redux/actions/matches'

import { isEmpty } from 'app/helpers/utils'

import ProMatches from 'app/components/Matches/Index/ProMatches'
import PublicMatches from 'app/components/Matches/Index/PublicMatches'

import { Container } from './styled'

const Matches = () => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches.items.proMatches)

  useEffect(() => {
    dispatch(fetchAllMatches())
  }, [])

  return !isEmpty(matches) &&
    <Container>
      <ProMatches />
      <PublicMatches />
    </Container>
}

export default Matches
