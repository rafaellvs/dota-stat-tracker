import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import {
  getHeroImage,
  getHeroLocalizedName,
  getGameMode,
  getSkillBracket,
  getGameDuration,
  getLobbyType,
  getTimeElapsed
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import { Container, HeroPlayed } from './styled'

const Matches = () => {
  const matches = useSelector(state => state.players.selected.matches)

  const columns = [
    'Hero',
    'KDA',
    'Info',
    'Result',
    'Duration',
    'When',
  ]

  const handleClick = match =>
    navigate(`/match/${match.match_id}`)

  useEffect(() => scrollTo(0, 0))

  return (
    <Container>
      <Text component='h2'>
        matches
      </Text>
      <Text padding='1rem 0'>
        {`showing ${matches.length} matches`}
      </Text>

      <Table columns={columns}>
        {
          matches.map(match =>
            <tr
              key={match.match_id}
              onClick={() => handleClick(match)}
            >
              <Cell id='hero'>
                <HeroPlayed>
                  <Image src={getHeroImage(match.hero_id)} />

                  <Text component='h5' variant='hideOverflow'>
                    {getHeroLocalizedName(match.hero_id)}
                  </Text>
                </HeroPlayed>
              </Cell>

              <Cell id='kda'>
                {`${match.kills}-${match.deaths}-${match.assists}`}
              </Cell>

              <Cell id='info'>
                <div>
                  <Text>{getGameMode(match.game_mode)}</Text>
                  <Text>{getLobbyType(match.lobby_type)}</Text>
                  <Text>{getSkillBracket(match.skill)}</Text>
                </div>
              </Cell>

              <Cell id='result'>
                {
                  match.player_slot < 5 ^ match.radiant_win
                    ? <Text variant='loss'>lost match</Text>
                    : <Text variant='win'>won match</Text>
                }
              </Cell>

              <Cell id='duration'>
                {getGameDuration(match.duration)}
              </Cell>

              <Cell id='when'>
                {getTimeElapsed(match.start_time)}
              </Cell>
            </tr>
          )
        }
      </Table>
    </Container>
  )
}

export default Matches
