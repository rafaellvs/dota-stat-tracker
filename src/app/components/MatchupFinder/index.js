import React, { useState } from 'react'
import { navigate } from '@reach/router'

import { getHeroId, generateHeroesDatalist } from 'app/helpers/utils'

import Form from 'app/components/core/Form'
import Input from 'app/components/core/Input'
import Text from 'app/components/core/Text'

import { Container, TeamsContainer } from './styled'

const MatchupFinder = () => {
  const [input, setInput] = useState({
    teamA: Array.from({ length: 5 }, () => ''),
    teamB: Array.from({ length: 5 }, () => ''),
  })

  const renderInputs = team =>
    Array.from({ length: 5 })
      .map((_, index) =>
        <Input
          key={team + index}
          name={team}
          data-index={index}
          type='text'
          placeholder='hero'
          list='heroes'
          value={input[team][index]}
          onChange={handleInput}
        />
      )

  const handleInput = event => {
    const index = event.target.dataset.index
    const newInputArray = input[event.target.name]
    newInputArray.splice(index, 1, event.target.value)

    setInput({
      ...input,
      [event.target.name]: newInputArray,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const teamA = input.teamA.map(hero => getHeroId(hero))
    const teamB = input.teamB.map(hero => getHeroId(hero))

    navigate(
      `/search/matchups/${teamA}&${teamB}`,
      { state: { teamA, teamB } }
    )
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TeamsContainer>
          <div>
            <Text>Radiant:</Text>
            {renderInputs('teamA')}
          </div>

          <div>
            <Text>Dire:</Text>
            {renderInputs('teamB')}
          </div>
        </TeamsContainer>

        {generateHeroesDatalist()}

        <Input
          type='submit'
          value='find matches'
          margin='2rem 0 0 0'
        />
      </Form>
    </Container>
  )
}

export default MatchupFinder
