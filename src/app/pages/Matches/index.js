import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { isEmpty } from 'app/helpers/utils'
import { fetchAllMatches } from 'app/redux/actions/matches'

import { Container } from './styled'

const Matches = ({ children }) => {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches.items)

  useEffect(() => {
    dispatch(fetchAllMatches())
  }, [])

  useEffect(() => scrollTo(0, 0))

  return (
    !isEmpty(matches.proMatches) &&
    !isEmpty(matches.publicMatches) &&
      <Container>
        {children}
      </Container>
  )
}

Matches.propTypes = {
  children: PropTypes.node,
}

export default Matches
