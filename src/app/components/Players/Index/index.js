import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navigate } from '@reach/router'

import { fetchProPlayers } from 'app/redux/actions/players'

import Text from 'app/components/core/Text'

import {
  Container,
  Players,
  Result,
  Avatar,
} from './styled'

const ProPlayers = () => {
  const dispatch = useDispatch()
  const players = useSelector(state => state.players.items)

  const handleClick = profile =>
    navigate(`/players/${profile.account_id}`)

  useEffect(() => {
    dispatch(fetchProPlayers())
  }, [])

  return (
    <Container>
      <Text component='h2'>
        pro players
      </Text>
      <Text padding='1rem 0'>
        showing 100 players
      </Text>

      <Players>
        {
          players
            .filter((_, index) => index < 100)
            .map(profile =>
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
      </Players>
    </Container>
  )
}

export default ProPlayers
