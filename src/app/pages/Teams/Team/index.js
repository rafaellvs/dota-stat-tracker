import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSelectedTeam } from 'app/redux/actions/teams'

import { isEmpty } from 'app/helpers/utils'

import Overview from 'app/components/Teams/Team/Overview'

const TeamPage = ({ id, children }) => {
  const dispatch = useDispatch()
  const team = useSelector(state => state.teams.selected)

  useEffect(() => {
    dispatch(fetchSelectedTeam(id))
  }, [id])

  return !isEmpty(team) &&
    <>
      <Overview />

      {children}
    </>
}

TeamPage.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
}

export default TeamPage
