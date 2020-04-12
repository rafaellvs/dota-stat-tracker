import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { useFetching } from 'app/hooks/isFetching'
import { fetchAll } from 'app/redux/actions/search'
import { fetchMatchups } from 'app/redux/actions/matches'

import SearchTabs from 'app/components/SearchTabs'

const SearchResults = ({ query, input, location }) => {
  const dispatch = useDispatch()
  const isFetching = useFetching()

  const [selected, setSelected] = useState('')
  const { teamA, teamB } = location.state

  useEffect(() => {
    switch (query) {
      case 'all':
        dispatch(fetchAll(input))
        setSelected('players')
        break

      case 'matchups':
        dispatch(fetchMatchups(teamA, teamB))
        setSelected('matches')
        break

      default:
        break
    }
  }, [])

  return !isFetching && <SearchTabs selected={selected} setSelected={setSelected} />
}

SearchResults.propTypes = {
  query: PropTypes.string,
  input: PropTypes.string,
  location: PropTypes.object
}

export default SearchResults
