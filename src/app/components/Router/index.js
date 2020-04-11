import React from 'react'
import { Router } from '@reach/router'

import NavBar from 'app/components/NavBar'
import Home from 'app/pages/Home'
import FindMatchup from 'app/pages/FindMatchup'
import PlayerProfile from 'app/components/PlayerProfile'
import Match from 'app/components/Match'

import { Section } from './styled'

const AppRouter = () =>
  <Section>
    <NavBar />

    <Router>
      <Home path='/' />
      <FindMatchup path='matchup' />
      <PlayerProfile path='player/:id' />
      <Match path='match/:id' />
    </Router>
  </Section>

export default AppRouter
