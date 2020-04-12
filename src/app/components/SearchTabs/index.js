import React from 'react'
import PropTypes from 'prop-types'

import Tabs from 'app/components/core/Tabs'
import SearchContent from './SearchContent'

const SearchTabs = ({ selected, setSelected }) =>
  <Tabs
    selected={selected}
    setSelected={setSelected}
  >
    <SearchContent />
  </Tabs>

SearchTabs.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func
}

export default SearchTabs
