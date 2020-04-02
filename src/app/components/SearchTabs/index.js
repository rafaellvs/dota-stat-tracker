import React from 'react'

import Tabs from 'app/components/core/Tabs'
import SearchContent from './SearchContent'

import { Container } from './styled'

const SearchTabs = () =>
  <Container>
    <Tabs>
      <SearchContent />
    </Tabs>
  </Container>

export default SearchTabs
