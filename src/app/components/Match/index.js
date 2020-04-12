import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { isEmpty, getRadiantHeroes, getDireHeroes } from 'app/helpers/utils'
import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Text from 'app/components/core/Text'

import Team from './Team'

import { Container } from './styled'

const Match = ({ id }) => {
  const dispatch = useDispatch()
  const match = useSelector(state => state.matches.selected)

  useEffect(() => {
    dispatch(fetchSelectedMatch(id))
  }, [])

  return !isEmpty(match) &&
    <Container>
      <Text component='h2'>
        Match {match.match_id}
      </Text>

      <Text component='h4'>Radiant:</Text>
      <Team heroes={getRadiantHeroes(match)} />

      <Text component='h4'>Dire:</Text>
      <Team heroes={getDireHeroes(match)} />
    </Container>
}

Match.propTypes = {
  id: PropTypes.string
}

export default Match
