import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { fetchTeams } from 'app/redux/actions/teams'

import { isEmpty } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import {
  Container,
  TeamsContainer,
  Team,
} from './styled'

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
      <Text component='h1'>
        teams
      </Text>
      <Text padding='1rem 0'>
        {`showing ${teams.length} teams`}
      </Text>

      <TeamsContainer>
        {
          teams.map(team =>
            <Team
              key={team.team_id}
              onClick={() => handleClick(team.team_id)}
            >
              <Image src={team.logo_url} />
              <Text variant='hideOverflow'>{team.name}</Text>
              <Text>{team.rating}</Text>
            </Team>
          )
        }
      </TeamsContainer>
    </Container>
}

export default Teams
