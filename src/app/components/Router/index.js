import React, { useEffect } from 'react'
import { useLocation } from '@reach/router'

import { useFetching } from 'app/hooks/isFetching'

import NavBar from 'app/components/NavBar'
import Breadcrumbs from 'app/components/Breadcrumbs'
import Page404 from 'app/pages/Page404'
import Home from 'app/pages/Home'
import FindMatchup from 'app/pages/FindMatchup'
import SearchResults from 'app/pages/SearchResults'

import Players from 'app/pages/Players'
import PlayersIndex from 'app/pages/Players/Index'
import Player from 'app/pages/Players/Player'
import PlayerIndex from 'app/pages/Players/Player/Index'
import PlayerMatches from 'app/pages/Players/Player/Matches'
import PlayerHeroes from 'app/pages/Players/Player/Heroes'
import PlayerPeers from 'app/pages/Players/Player/Peers'

import Matches from 'app/pages/Matches'
import MatchesIndex from 'app/pages/Matches/Index'
import ProMatches from 'app/pages/Matches/ProMatches'
import PublicMatches from 'app/pages/Matches/PublicMatches'
import Match from 'app/pages/Matches/Match'

import Teams from 'app/pages/Teams'
import TeamsIndex from 'app/pages/Teams/Index'
import Team from 'app/pages/Teams/Team/'
import TeamIndex from 'app/pages/Teams/Team/Index'
import TeamMatches from 'app/pages/Teams/Team/Matches'
import TeamPlayers from 'app/pages/Teams/Team/Players'

import loading from 'assets/images/loading.gif'

import {
  ReachRouter,
  Section,
  MainContent,
  Loading,
} from './styled'

const AppRouter = () => {
  const isFetching = useFetching()
  const location = useLocation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Section>
      <NavBar />

      <MainContent>
        {
          isFetching
            ? <Loading src={loading} />
            : <Breadcrumbs />
        }

        <ReachRouter hide={isFetching ? 1 : 0}>
          <Page404 default />

          <Home path='/' />

          <FindMatchup path='matchup' />

          <SearchResults path='search/:query/:input' />

          <Players path='players'>
            <PlayersIndex path='/' />

            <Player path=':id'>
              <PlayerIndex path='/' />
              <PlayerMatches path='matches' />
              <PlayerHeroes path='heroes' />
              <PlayerPeers path='peers' />
            </Player>
          </Players>

          <Matches path='matches'>
            <MatchesIndex path='/' />
            <ProMatches path='promatches' />
            <PublicMatches path='publicmatches' />
            <Match path=':id' />
          </Matches>

          <Teams path='teams'>
            <TeamsIndex path='/' />

            <Team path=':id'>
              <TeamIndex path='/' />
              <TeamMatches path='matches' />
              <TeamPlayers path='players' />
            </Team>
          </Teams>
        </ReachRouter>
      </MainContent>
    </Section>
  )
}

export default AppRouter
