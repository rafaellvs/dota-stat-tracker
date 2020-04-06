import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Link from 'app/components/core/Link'

import {
  getHeroName,
  getHeroImage,
  getStarImage,
  getMedalImage,
  uncalibratedMedalImage
} from 'app/helpers/utils'

import {
  Container,
  Profile,
  Info,
  Avatar,
  MostPlayed,
  MostPlayedHero,
  Rank,
  Star,
  Medal,
  RecentMatches,
  Match
} from './styled'

const PlayerProfile = () => {
  const dispatch = useDispatch()
  const selected = useSelector(state => state.players.selected)

  return (
    <Container>
      <Profile>
        <Info>
          <Avatar src={selected.account.profile.avatarfull} />

          <Text component='p'>
            {selected.account.profile.personaname}
          </Text>

          <Link
            href={selected.account.profile.profileurl}
            target='_blank'
            rel='noopener noreferrer'
          >
            steam profile
          </Link>
        </Info>

        <MostPlayed>
          {
            selected.heroes
              .filter((hero, index) => index < 5)
              .map(hero =>
                <MostPlayedHero src={getHeroImage(hero.hero_id)} key={hero.hero_id} />
              )
          }
        </MostPlayed>

        <Rank>
          {
            selected.account.rank_tier
              ? (
                <>
                  <Star src={getStarImage(selected.account.rank_tier)} />
                  <Medal src={getMedalImage(selected.account.rank_tier)} />
                </>
              )
              : <Medal src={uncalibratedMedalImage} />
          }
        </Rank>
      </Profile>

      <RecentMatches>
        {
          selected.matches.map((match, index) => {
            return (
              <Match
                key={index}
                onClick={() => dispatch(fetchSelectedMatch(match.match_id))}
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

export default PlayerProfile
