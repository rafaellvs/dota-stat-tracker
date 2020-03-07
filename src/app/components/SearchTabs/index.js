import React from 'react'
import PropTypes from 'prop-types'

import Tabs from 'app/components/core/Tabs'
import SearchContent from './SearchContent'

import { Container } from './styled'

const SearchTabs = ({ result, setResult }) =>
  <Container hasContent={result}>
    <Tabs>
      <SearchContent result={result} setResult={setResult} />
    </Tabs>
  </Container>

SearchTabs.propTypes = {
  result: PropTypes.object,
  setResult: PropTypes.func
}

export default SearchTabs
