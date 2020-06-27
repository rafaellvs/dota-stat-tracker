import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import {
  getRadiantHeroes,
  getDireHeroes,
  getTimeElapsed,
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Team from '../Team'

import { Container } from './styled'

const Results = () => {
  const matches = useSelector(state => state.matches.items.search)

  const columns = [
    'ID',
    'Radiant / Dire',
    'Result',
    'When',
  ]

  const handleClick = match =>
    navigate(`/matches/${match.match_id}`)

  return (
    <Container>
      <Table columns={columns}>
        {
          matches.map(match =>
            <tr
              key={match.match_id}
              onClick={() => handleClick(match)}
            >
              <Cell id='id'>
                {match.match_id}
              </Cell>

              <Cell id='Radiant / Dire'>
                <Team heroes={getRadiantHeroes(match)} />
                <Team heroes={getDireHeroes(match)} />
              </Cell>

              <Cell id='result'>
                <Text variant={match.teamawin ? 'win' : 'loss'}>
                  {
                    match.teamawin
                      ? 'Radiant Victory'
                      : 'Dire Victory'
                  }
                </Text>
              </Cell>

              <Cell id='when' variant='lastCell'>
                {getTimeElapsed(match.start_time)}
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
  )
}

export default Results
