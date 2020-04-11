import styled from 'styled-components'

import CoreSection from 'app/components/core/Section'

import bg from 'assets/images/bg.jpg'

export const Section = styled(CoreSection)`
  background: top / cover no-repeat url(${bg});
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center; 
`
