import React from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'

import {
  Container,
  Bar,
  PercentBar,
  WinRate,
} from './styled'

const HeroWinRate = ({ wins, total }) => {
  let winRate = 0

  if (total) winRate = (wins / total * 100).toFixed(1)

  return (
    <Container>
      <Bar total={total}>
        <PercentBar winRate={winRate} />
        <WinRate>
          {
            winRate
              ? `${winRate}%`
              : '-'
          }
        </WinRate>
      </Bar>

      <Text>
        {`${total} games`}
      </Text>
    </Container>
  )
}

HeroWinRate.propTypes = {
  wins: PropTypes.number,
  total: PropTypes.number
}

export default HeroWinRate
