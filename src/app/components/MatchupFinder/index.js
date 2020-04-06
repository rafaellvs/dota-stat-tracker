import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import heroes from 'app/helpers/heroes'
import { fetchMatchups } from 'app/redux/actions/matches'

import Text from 'app/components/core/Text'

import {
  Container,
  Form,
  Input,
  Submit
} from './styled'

const MatchupFinder = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    teamA: '',
    teamB: ''
  })

  const handleInput = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const teamA = heroes.find(hero => hero.localized_name === input.teamA)
    const teamB = heroes.find(hero => hero.localized_name === input.teamB)

    dispatch(fetchMatchups(teamA.id, teamB.id))
  }

  return (
    <Container>
      <Text component='h3'>
        Matchup Finder
      </Text>

      <Form onSubmit={handleSubmit} autoComplete='off'>
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

        <datalist id='heroes'>
          {
            heroes.map(hero =>
              <option
                key={hero.id}
                value={hero.localized_name}
              />
            )
          }
        </datalist>

        <Submit type='submit' value='find matches' />
      </Form>
    </Container>
  )
}

export default MatchupFinder
