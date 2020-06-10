import React from 'react'
import PropTypes from 'prop-types'

import { getHeroImage } from 'app/helpers/utils'

import Image from 'app/components/core/Image'

import { Container } from './styled'

const Team = ({ heroes }) => {
  return (
    <Container>
      {
        heroes.map(id =>
          <Image
            key={id}
            src={getHeroImage(id)}
            width='50px'
          />
        )
      }
    </Container>
  )
}

Team.propTypes = {
  heroes: PropTypes.array
}

export default Team
