import React, { useState } from 'react'

import Input from 'app/components/core/Input'

import { Container, Form } from './styled'
import { navigate } from '@reach/router'

const SearchBox = () => {
  const [input, setInput] = useState('')

  const handleInput = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    navigate(`/search/all/${input}`)
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
