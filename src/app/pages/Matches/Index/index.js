import React from 'react'

import ProMatches from 'app/components/Matches/Index/ProMatches'
import PublicMatches from 'app/components/Matches/Index/PublicMatches'

import { Container } from './styled'

const Matches = () =>
  <Container>
    <ProMatches />
    <PublicMatches />
  </Container>

export default Matches
