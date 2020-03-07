import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import MatchResult from 'app/components/MatchResult'
import PlayerResults from 'app/components/PlayerResults'

import { Content } from './styled'

const SearchContent = ({
  selected,
  result,
  setResult
}) =>
  <Content hasContent={result}>
    {
      selected === 'players' &&
        <PlayerResults result={result} setResult={setResult} />
    }

    {
      selected === 'matches' &&
      (!result.matchResult.error
        ? <MatchResult result={result} setResult={setResult} />
        : <Text component='h3'>found nothing :(</Text>
      )
    }
  </Content>

SearchContent.propTypes = {
  selected: PropTypes.string,
  result: PropTypes.object,
  setResult: PropTypes.func
}

export default SearchContent
