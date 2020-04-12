import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'

import {
  isEmpty,
  getHeroName,
  getHeroImage,
  getStarImage,
  getMedalImage,
  uncalibratedMedalImage
} from 'app/helpers/utils'

import { fetchSelectedPlayer } from 'app/redux/actions/players'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'

import {
  Container,
  Profile,
  Info,
  Avatar,
  Link,
  MostPlayed,
  MostPlayedHero,
  Rank,
  Star,
  Medal,
  RecentMatches,
  Match
} from './styled'

const PlayerProfile = ({ id }) => {
  const dispatch = useDispatch()
  const player = useSelector(state => state.players.selected)

  useEffect(() => {
    dispatch(fetchSelectedPlayer(id))
  }, [])

  return !isEmpty(player) &&
  (
    <Container>
      <Profile>
        <Info>
          <Avatar src={player.account.profile.avatarfull} />

          <Text component='p'>
            {player.account.profile.personaname}
          </Text>

          <Link
            href={player.account.profile.profileurl}
            target='_blank'
            rel='noopener noreferrer'
          >
            steam profile
          </Link>
        </Info>

        <MostPlayed>
          {
            player.heroes
              .filter((hero, index) => index < 5)
              .map(hero =>
                <MostPlayedHero src={getHeroImage(hero.hero_id)} key={hero.hero_id} />
              )
          }
        </MostPlayed>

        <Rank>
          {
            player.account.rank_tier
              ? (
                <>
                  <Star src={getStarImage(player.account.rank_tier)} />
                  <Medal src={getMedalImage(player.account.rank_tier)} />
                </>
              )
              : <Medal src={uncalibratedMedalImage} />
          }
        </Rank>
      </Profile>

      <RecentMatches>
        {
          player.matches.map((match, index) => {
            return (
              <Match
                key={match.match_id}
                onClick={() => navigate(`/match/${match.match_id}`)}
              >
                <Image src={getHeroImage(match.hero_id)} />

                <Text component='h5' variant='hideOverflow'>
                  {getHeroName(match.hero_id)}
                </Text>

                <Text>
                  {`${match.kills}-${match.deaths}-${match.assists}`}
                </Text>

                {
                  match.player_slot < 5 ^ match.radiant_win
                    ? <Text variant='loss'>lost match</Text>
                    : <Text variant='win'>won match</Text>
                }
              </Match>
            )
          })
        }
      </RecentMatches>
    </Container>
  )
}

PlayerProfile.propTypes = {
  id: PropTypes.string
}

export default PlayerProfile
