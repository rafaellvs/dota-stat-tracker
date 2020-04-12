import React from 'react'
import { useSelector } from 'react-redux'

import Text from 'app/components/core/Text'

import {
  Container,
  Avatar,
  Link
} from './styled'

const Account = () => {
  const profile = useSelector(state =>
    state.players.selected.account.profile
  )

  return (
    <Container>
      <Avatar src={profile.avatarfull} />

      <Text>
        {profile.personaname}
      </Text>

      <Link
        href={profile.profileurl}
        target='_blank'
      >
        steam profile
      </Link>
    </Container>
  )
}

export default Account
