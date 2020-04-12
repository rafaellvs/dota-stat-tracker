import React from 'react'
import { useSelector } from 'react-redux'

import {
  getStarImage,
  getMedalImage,
  uncalibratedMedalImage
} from 'app/helpers/utils'

import {
  Container,
  Star,
  Medal
} from './styled'

const Rank = () => {
  const account = useSelector(state =>
    state.players.selected.account
  )

  return (
    <Container>
      {
        account.rank_tier
          ? (
            <>
              <Star src={getStarImage(account.rank_tier)} />
              <Medal src={getMedalImage(account.rank_tier)} />
            </>
          )
          : <Medal src={uncalibratedMedalImage} />
      }
    </Container>
  )
}

export default Rank
