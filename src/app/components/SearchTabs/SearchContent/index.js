import React from 'react'
import PropTypes from 'prop-types'

import MatchResults from 'app/components/MatchResults'
import PlayerResults from 'app/components/PlayerResults'

const renderContent = selected => {
  switch (selected) {
    case 'players':
      return <PlayerResults />

    case 'matches':
      return <MatchResults />

    default:
      return null
  }
}

const SearchContent = ({ selected }) =>
  renderContent(selected)

SearchContent.propTypes = {
  selected: PropTypes.string
}

export default SearchContent
