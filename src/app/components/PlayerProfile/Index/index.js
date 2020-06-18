import React from 'react'

import MostPlayed from './MostPlayed'
import Peers from './Peers'
import RecentMatches from './RecentMatches'

import { Profile } from './styled'

const Index = () => {
  return (
    <>
      <RecentMatches />

      <Profile>
        <MostPlayed />
        <Peers />
      </Profile>

    </>
  )
}

export default Index
