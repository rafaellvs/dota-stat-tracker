import React from 'react'
import { Router } from '@reach/router'

import { useFetching } from 'app/hooks/isFetching'

import NavBar from 'app/components/NavBar'
import Home from 'app/pages/Home'
import FindMatchup from 'app/pages/FindMatchup'
import SearchResults from 'app/pages/SearchResults'
import PlayerProfile from 'app/components/PlayerProfile'
import Match from 'app/components/Match'
import Teams from 'app/pages/Teams'
import Team from 'app/components/Team'
import Footer from 'app/components/Footer'

import loading from 'assets/images/loading.gif'

import { Section, MainContent, Loading } from './styled'

const AppRouter = () => {
  const isFetching = useFetching()

  return (
    <Section>
      <NavBar />

      <MainContent isFetching={isFetching}>
        {
          isFetching &&
            <Loading src={loading} />
        }
        <Router>
          <Home path='/' />
          <FindMatchup path='matchup' />
          <SearchResults path='search/:query/:input' />
          <PlayerProfile path='player/:id' />
          <Match path='match/:id' />

          <Teams path='teams' />
          <Team path='teams/:id' />
        </Router>
      </MainContent>

      <Footer />
    </Section>
  )
}

export default AppRouter
