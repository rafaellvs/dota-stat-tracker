import React, { useState } from 'react'

import SearchBox from 'app/components/SearchBox'
import SearchTabs from 'app/components/SearchTabs'
import PlayerProfile from 'app/components/PlayerProfile'
import Match from 'app/components/Match'

import GlobalStyles from 'app/helpers/globalStyles'

import { Section } from './styled'

const App = () => {
  const [result, setResult] = useState(null)

  return (
    <Section>
      <GlobalStyles />
      <SearchBox setResult={setResult} />

      {
        result &&
        result.players &&
          <SearchTabs result={result} setResult={setResult} />
      }

      {
        result &&
        result.account &&
          <PlayerProfile result={result} setResult={setResult} />
      }

      {
        result &&
        result.match &&
          <Match result={result} />
      }
    </Section>
  )
}

export default App
