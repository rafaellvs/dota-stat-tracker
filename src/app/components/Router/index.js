import React from 'react'
import { Router } from '@reach/router'

import { useFetching } from 'app/hooks/isFetching'

import NavBar from 'app/components/NavBar'
import Home from 'app/pages/Home'
import FindMatchup from 'app/pages/FindMatchup'
import SearchResults from 'app/pages/SearchResults'
import PlayerProfile from 'app/components/PlayerProfile'
import Matches from 'app/pages/Matches'
import Match from 'app/components/Match'
import Teams from 'app/pages/Teams'
import Team from 'app/components/Team'

import loading from 'assets/images/loading.gif'

import { Section, MainContent, Loading } from './styled'

const AppRouter = () => {
  const isFetching = useFetching()

  return (
    <Section>
      <NavBar />

      <MainContent>
        {
          isFetching &&
            <Loading src={loading} />
        }
        <Router>
          <Home path='/' />
          <FindMatchup path='matchup' />
          <SearchResults path='search/:query/:input' />
          <PlayerProfile path='player/:id' />

          <Matches path='matches' />
          <Match path='match/:id' />

          <Teams path='teams' />
          <Team path='teams/:id' />
        </Router>
      </MainContent>
    </Section>
  )
}

export default AppRouter
