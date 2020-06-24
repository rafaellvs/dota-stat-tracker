import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSelectedMatch } from 'app/redux/actions/matches'

import { isEmpty } from 'app/helpers/utils'

import Match from 'app/components/Matches/Match'

const MatchPage = ({ id }) => {
  const dispatch = useDispatch()
  const match = useSelector(state => state.matches.selected)

  useEffect(() => {
    dispatch(fetchSelectedMatch(id))
  }, [id])

  return !isEmpty(match) &&
    <Match />
}

MatchPage.propTypes = {
  id: PropTypes.string,
}

export default MatchPage
