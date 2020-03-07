import React from 'react'
import PropTypes from 'prop-types'

import Image from 'app/components/core/Image'
import Text from 'app/components/core/Text'
import Link from 'app/components/core/Link'

import heroes from 'app/helpers/heroes'
import { getMatch } from 'app/helpers/requests'

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

const PlayerProfile = ({ result, setResult }) =>
  <Container>
    <Profile>
      <Info>
        <Avatar src={result.account.profile.avatarfull} />

        <Text component='p'>
          {result.account.profile.personaname}
        </Text>

        <Link
          href={result.account.profile.profileurl}
          target='_blank'
          rel='noopener noreferrer'
        >
          steam profile
        </Link>
      </Info>

      <MostPlayed>
        {
          result.heroes
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
          result.account.rank_tier
            ? (
              <>
                <Star src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${result.account.rank_tier.toString()[1]}.png`} />
                <Medal src={`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${result.account.rank_tier.toString()[0]}.png`} />
              </>
            )
            : <Medal src='https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_0.png' />
        }
      </Rank>
    </Profile>

    <RecentMatches>
      {
        result.matches.map((match, index) => {
          const heroName = heroes
            .find(h => h.id === parseInt(match.hero_id)).name

          return (
            <Match key={index} onClick={() => getMatch(match.match_id, setResult)}>
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

PlayerProfile.propTypes = {
  result: PropTypes.object,
  setResult: PropTypes.func
}

export default PlayerProfile
