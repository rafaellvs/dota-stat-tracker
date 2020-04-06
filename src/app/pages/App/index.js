import React from 'react'
import { useSelector } from 'react-redux'

import GlobalStyles from 'app/helpers/globalStyles'
import { isEmpty } from 'app/helpers/utils'

import SearchBox from 'app/components/SearchBox'
import MatchupFinder from 'app/components/MatchupFinder'
import SearchTabs from 'app/components/SearchTabs'
import PlayerProfile from 'app/components/PlayerProfile'
import Match from 'app/components/Match'

import { Section } from './styled'

const App = () => {
  const {
    players,
    matches
  } = useSelector(state => state)

  return (
    <Section>
      <GlobalStyles />
      <SearchBox />
      <MatchupFinder />

      {
        (players.items.length > 0 || matches.items.length > 0) &&
          <SearchTabs />
      }

      {
        !isEmpty(players.selected) &&
          <PlayerProfile />
      }

      {
        !isEmpty(matches.selected) &&
          <Match />
      }
    </Section>
  )
}

export default App
