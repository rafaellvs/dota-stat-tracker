import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import {
  Container,
  Bar,
  PercentBar,
  WinRate
} from './styled'

const HeroWinRate = ({ hero }) => {
  const winRate = (hero.win / hero.games * 100).toFixed(1)

  return (
    <Container>
      <Bar>
        <PercentBar winRate={winRate} />
        <WinRate>
          {winRate}%
        </WinRate>
      </Bar>

      <Text>
        {hero.games}
      </Text>
    </Container>
  )
}

HeroWinRate.propTypes = {
  hero: PropTypes.object
}

export default HeroWinRate
