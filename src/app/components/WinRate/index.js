import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import {
  Container,
  Bar,
  PercentBar,
  WinRate
} from './styled'

const HeroWinRate = ({ wins, total }) => {
  const winRate = (wins / total * 100).toFixed(1)

  return (
    <Container>
      <Bar>
        <PercentBar winRate={winRate} />
        <WinRate>
          {winRate}%
        </WinRate>
      </Bar>

      <Text>
        {total}
      </Text>
    </Container>
  )
}

HeroWinRate.propTypes = {
  wins: PropTypes.number,
  total: PropTypes.number
}

export default HeroWinRate
