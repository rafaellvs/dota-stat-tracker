import React from 'react'
import PropTypes from 'prop-types'

import { getHeroImage } from 'app/helpers/utils'

import Image from 'app/components/core/Image'

import { Container } from './styled'

const TeamHeroes = ({ heroes }) => {
  return (
    <Container>
      {
        heroes.map(id =>
          <Image
            key={id}
            src={getHeroImage(id)}
          />
        )
      }
    </Container>
  )
}

TeamHeroes.propTypes = {
  heroes: PropTypes.array,
}

export default TeamHeroes
