import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { filterByTimeElapsed, getTimeElapsed } from 'app/helpers/utils'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import WinRate from 'app/components/WinRate'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  PaginationContainer,
  Team,
} from './styled'

const Teams = () => {
  const allTeams = useSelector(
    state => state.teams.items
      .filter(team => filterByTimeElapsed(team.last_match_time))
  )
  const [teams, setTeams] = useState(allTeams.slice(0, 25))

  const columns = [
    'Team',
    'Rating',
    'Winrate',
    'Last Match',
  ]

  const handleClick = id =>
    navigate(`/teams/${id}`)

  return (
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            teams
          </Text>
          <Text>
            {`showing ${teams.length} teams that played a match in 1 year`}
          </Text>
        </div>

        <Pagination
          array={allTeams}
          setArray={setTeams}
        />
      </PaginationContainer>

      <Table columns={columns}>
        {
          teams.map(team =>
            <tr
              key={team.team_id}
              onClick={() => handleClick(team.team_id)}
            >
              <Cell id='team' width='400px'>
                <Team>
                  <Image src={team.logo_url} />
                  <Text variant='hideOverflow'>{team.name}</Text>
                </Team>
              </Cell>

              <Cell id='rating' width='100px'>
                <Text>{team.rating}</Text>
              </Cell>

              <Cell id='winrate'>
                <WinRate
                  wins={team.wins}
                  total={team.wins + team.losses}
                />
              </Cell>

              <Cell id='last-match' variant='lastCell'>
                {getTimeElapsed(team.last_match_time)}
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
  )
}

export default Teams
