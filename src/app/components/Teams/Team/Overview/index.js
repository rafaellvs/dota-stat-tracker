import React from 'react'
import { useSelector } from 'react-redux'

import { getTimeElapsed } from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import WinRate from 'app/components/WinRate'

import { Container, Stats } from './styled'

const Overview = () => {
  const stats = useSelector(state => state.teams.selected.team)

  return (
    <Container>
      <Image src={stats.logo_url} />

      <Stats>
        <Text component='h1' padding='0 0 3rem 0'>
          {stats.name}
        </Text>
        <Text padding='0 0 .5rem 0'>
          {stats.rating}
        </Text>
        <Text>
          {`${stats.wins} - ${stats.losses}`}
        </Text>
        <WinRate
          wins={stats.wins}
          total={stats.wins + stats.losses}
        />
      </Stats>

      <Text>
        {`last match ${getTimeElapsed(stats.last_match_time)}`}
      </Text>
    </Container>
  )
}

export default Overview
