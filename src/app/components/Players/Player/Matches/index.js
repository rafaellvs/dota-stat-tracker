import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { navigate } from '@reach/router'

import {
  isEmpty,
  getHeroImage,
  getHeroLocalizedName,
  getGameMode,
  getSkillBracket,
  getGameDuration,
  getLobbyType,
  getTimeElapsed,
} from 'app/helpers/utils'

import Text from 'app/components/core/Text'
import Image from 'app/components/core/Image'
import Table from 'app/components/core/Table'
import Cell from 'app/components/core/Table/Cell'

import Pagination from 'app/components/Pagination'
import BackToTop from 'app/components/BackToTop'

import {
  Container,
  HeroPlayed,
  PaginationContainer,
} from './styled'

const Matches = () => {
  const allMatches = useSelector(state => state.players.selected.matches)
  const [matches, setMatches] = useState(allMatches.slice(0, 25))

  const columns = [
    'Hero',
    'KDA',
    'Info',
    'Result',
    'Duration',
    'When',
  ]

  const handleClick = match =>
    navigate(`/matches/${match.match_id}`)

  return !isEmpty(matches) &&
    <Container>
      <PaginationContainer>
        <div>
          <Text component='h2' padding='0 0 .5rem 0'>
            matches
          </Text>
          <Text>
            {`showing ${matches.length} matches`}
          </Text>
        </div>

        <Pagination
          array={allMatches}
          setArray={setMatches}
        />
      </PaginationContainer>

      <Table columns={columns}>
        {
          matches.map(match =>
            <tr
              key={match.match_id}
              onClick={() => handleClick(match)}
            >
              <Cell id='hero' width='250px'>
                <HeroPlayed>
                  <Image src={getHeroImage(match.hero_id)} />

                  <Text component='h5'>
                    {getHeroLocalizedName(match.hero_id)}
                  </Text>
                </HeroPlayed>
              </Cell>

              <Cell id='kda' width='120px'>
                {`${match.kills}-${match.deaths}-${match.assists}`}
              </Cell>

              <Cell id='info' width='200px'>
                <Text>{getGameMode(match.game_mode)}</Text>
                <Text>{getLobbyType(match.lobby_type)}</Text>
                <Text>{getSkillBracket(match.skill)}</Text>
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

              <Cell id='when' variant='lastCell'>
                {getTimeElapsed(match.start_time)}
              </Cell>
            </tr>
          )
        }
      </Table>

      <BackToTop />
    </Container>
}

export default Matches
