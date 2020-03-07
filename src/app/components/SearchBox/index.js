import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Form from 'app/components/core/Form'
import Input from 'app/components/core/Input'

import { searchPlayer } from 'app/helpers/requests'

import { Container } from './styled'

const SearchBox = ({ setResult }) => {
  const [input, setInput] = useState('')

  const handleInput = event => {
    setInput(event.target.value)
  }

  return (
    <Container>
      <Form onSubmit={event => searchPlayer(event, input, setResult)}>
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

SearchBox.propTypes = {
  setResult: PropTypes.func
}

export default SearchBox
