import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { isEmpty } from 'app/helpers/utils'
import { fetchSelectedTeam } from 'app/redux/actions/teams'

import Stats from './Stats'
import RecentMatches from './RecentMatches'
import Players from './Players'

import { Container, TeamInfo } from './styled'

const Team = ({ id }) => {
  const dispatch = useDispatch()
  const team = useSelector(state => state.teams.selected)

  useEffect(() => {
    dispatch(fetchSelectedTeam(id))
  }, [])

  return !isEmpty(team) &&
    <Container>
      <TeamInfo>
        <Stats />
        <RecentMatches />
      </TeamInfo>

      <Players />
    </Container>
}

Team.propTypes = {
  id: PropTypes.string
}

export default Team
