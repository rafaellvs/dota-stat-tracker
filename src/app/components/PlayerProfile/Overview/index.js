import React from 'react'
import { useSelector } from 'react-redux'

import { getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'

import WinRate from 'app/components/WinRate'
import Rank from './Rank'

import {
  Container,
  Account,
  Avatar,
  Link,
} from './styled'

const Overview = () => {
  const profile = useSelector(state => state.players.selected.account.profile)
  const winrate = useSelector(state => state.players.selected.winrate)
  const lastMatch = useSelector(state => state.players.selected.matches[0])

  return (
    <Container>
      <Account>
        <Avatar src={profile.avatarfull} />
        <Text>{profile.personaname}</Text>
        <Link
          href={profile.profileurl}
          target='_blank'
        >
          steam profile
        </Link>
      </Account>

      <div>
        <Text>
          {`${winrate.win} - ${winrate.lose}`}
        </Text>

        <WinRate
          wins={winrate.win}
          total={winrate.win + winrate.lose}
        />

        <Text padding='1rem 0 0 0'>
          Last match {getTimeElapsed(lastMatch.start_time)}
        </Text>
      </div>

      <Rank />
    </Container>
  )
}

export default Overview
