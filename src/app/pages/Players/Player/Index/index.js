import React from 'react'

import RecentMatches from 'app/components/Players/Player/Index/RecentMatches'
import MostPlayed from 'app/components/Players/Player/Index/MostPlayed'
import Peers from 'app/components/Players/Player/Index/Peers'

import { Profile } from './styled'

const Player = () =>
  <>
    <RecentMatches />

    <Profile>
      <MostPlayed />
      <Peers />
    </Profile>
  </>

export default Player
