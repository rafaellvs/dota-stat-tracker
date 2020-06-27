import React from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import { isEmpty } from 'app/helpers/utils'

import Text from 'app/components/core/Text'

import Result404 from 'app/components/Search/Result404'

import {
  Container,
  Result,
  Avatar,
} from './styled'

const Results = () => {
  const players = useSelector(state => state.players.items)

  const handleClick = profile =>
    navigate(`/players/${profile.account_id}`)

  return isEmpty(players)
    ? <Result404 />
    : (
      <Container>
        {
          players.map(profile =>
            <Result
              key={profile.account_id}
              onClick={() => handleClick(profile)}
            >
              <Avatar src={profile.avatarfull} />

              <Text variant='hideOverflow'>
                {profile.personaname}
              </Text>
            </Result>
          )
        }
      </Container>
    )
}

export default Results
