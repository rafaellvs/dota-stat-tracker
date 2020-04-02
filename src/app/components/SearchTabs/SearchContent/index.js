import React from 'react'
import PropTypes from 'prop-types'

import MatchResults from 'app/components/MatchResults'
import PlayerResults from 'app/components/PlayerResults'

import { Content } from './styled'

const SearchContent = ({ selected }) =>
  <Content>
    {
      selected === 'players' &&
        <PlayerResults />
    }

    {
      selected === 'matches' &&
        <MatchResults />
    }
  </Content>

SearchContent.propTypes = {
  selected: PropTypes.string
}

export default SearchContent
