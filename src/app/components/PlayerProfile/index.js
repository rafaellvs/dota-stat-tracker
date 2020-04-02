import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSelectedMatch } from 'app/redux/actions/matches'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Link from 'app/components/core/Link'

import heroes from 'app/helpers/heroes'

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
  Match,
  HeroName,
  TextWon,
  TextLost
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
              .map(hero => {
                const heroName = heroes
                  .find(h => h.id === parseInt(hero.hero_id)).name

                return <MostPlayedHero src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} key={hero.hero_id} />
              })
          }
        </MostPlayed>

        <Rank>
          {
            selected.account.rank_tier
              ? (
                <>
                  <Star src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${selected.account.rank_tier.toString()[1]}.png`} />
                  <Medal src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${selected.account.rank_tier.toString()[0]}.png`} />
                </>
              )
              : <Medal src='https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png' />
          }
        </Rank>
      </Profile>

      <RecentMatches>
        {
          selected.matches.map((match, index) => {
            const heroName = heroes
              .find(h => h.id === parseInt(match.hero_id)).name

            return (
              <Match
                key={index}
                onClick={() => dispatch(fetchSelectedMatch(match.match_id))}
              >
                <Image src={`https://api.opendota.com/apps/dota2/images/heroes/${heroName}_sb.png`} />

                <HeroName component='h5'>
                  {heroName}
                </HeroName>

                <Text component='p'>
                  {`${match.kills}-${match.deaths}-${match.assists}`}
                </Text>

                {
                  match.player_slot < 5 ^ match.radiant_win
                    ? <TextLost>lost match</TextLost>
                    : <TextWon>won match</TextWon>
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
