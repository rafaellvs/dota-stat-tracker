import React from 'react'
import { useSelector } from 'react-redux'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import WinRate from 'app/components/WinRate'

import { Container } from './styled'

const Stats = () => {
  const stats = useSelector(state => state.teams.selected.team)

  return (
    <Container>
      <Text component='h1'>{stats.name}</Text>
      <Image src={stats.logo_url} />
      <Text>{stats.rating}</Text>

      <Text>{`${stats.wins} - ${stats.losses}`}</Text>
      <WinRate
        wins={stats.wins}
        total={stats.wins + stats.losses}
      />
    </Container>
  )
}

export default Stats
