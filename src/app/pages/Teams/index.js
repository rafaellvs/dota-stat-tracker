import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { isEmpty } from 'app/helpers/utils'
import { fetchTeams } from 'app/redux/actions/teams'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import { Container, Team } from './styled'

const Teams = () => {
  const dispatch = useDispatch()
  const teams = useSelector(state => state.teams.items)

  const handleClick = id =>
    navigate(`/teams/${id}`)

  useEffect(() => {
    dispatch(fetchTeams())
  }, [])

  return !isEmpty(teams) &&
    <Container>
      {
        teams.map(team =>
          <Team
            key={team.team_id}
            onClick={() => handleClick(team.team_id)}
          >
            <Image src={team.logo_url} />
            <Text>{team.name}</Text>
          </Team>
        )
      }
    </Container>
}

export default Teams
