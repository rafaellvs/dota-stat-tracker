import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { isEmpty, getHeroImage } from 'app/helpers/utils'
import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import {
  FullMatch,
  Heroes
} from './styled'

const Match = ({ id }) => {
  const dispatch = useDispatch()
  const match = useSelector(state => state.matches.selected)

  useEffect(() => {
    dispatch(fetchSelectedMatch(id))
  }, [])

  return !isEmpty(match) &&
  (
    <FullMatch>
      <Text component='h2'>
        Match {match.match_id}
      </Text>

      <Text component='h4'>
        Radiant:
      </Text>
      <Heroes>
        {
          match.players
            .filter((player, index) => index < 5)
            .map((player, index) =>
              <Image src={getHeroImage(player.hero_id)} key={index} />
            )
        }
      </Heroes>

      <Text component='h4'>
        Dire:
      </Text>
      <Heroes>
        {
          match.players
            .filter((player, index) => index > 4)
            .map((player, index) =>
              <Image src={getHeroImage(player.hero_id)} key={index} />
            )
        }
      </Heroes>
    </FullMatch>
  )
}

Match.propTypes = {
  id: PropTypes.string
}

export default Match
