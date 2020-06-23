import React, { useState } from 'react'
import { navigate } from '@reach/router'

import { getHeroId, generateHeroesDatalist } from 'app/helpers/utils'

import Text from 'app/components/core/Text'

import {
  Container,
  Form,
  Input,
  Submit,
} from './styled'

const MatchupFinder = () => {
  const [input, setInput] = useState({
    teamA: '',
    teamB: '',
  })

  const handleInput = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const teamA = getHeroId(input.teamA)
    const teamB = getHeroId(input.teamB)

    navigate(
      `/search/matchups/${teamA}&${teamB}`,
      { state: { teamA, teamB } }
    )
  }

  return (
    <Container>
      <Text component='h1'>Matchup Finder</Text>

      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='radiant heroes'
          list='heroes'
          name='teamA'
          value={input.teamA}
          onChange={handleInput}
        />

        <Input
          type='text'
          placeholder='dire heroes'
          list='heroes'
          name='teamB'
          value={input.teamB}
          onChange={handleInput}
        />

        {generateHeroesDatalist()}

        <Submit type='submit' value='find matches' />
      </Form>
    </Container>
  )
}

export default MatchupFinder
