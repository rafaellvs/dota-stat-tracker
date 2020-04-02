import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPlayers } from 'app/redux/actions/players'
import { fetchMatches } from 'app/redux/actions/matches'

import Form from 'app/components/core/Form'
import Input from 'app/components/core/Input'

import { Container } from './styled'

const SearchBox = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleInput = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(fetchPlayers(input))
    dispatch(fetchMatches(input))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='player name/id, match id...'
          value={input}
          onChange={handleInput}
        />

        <Input type='submit' value='search' />
      </Form>
    </Container>
  )
}

export default SearchBox
