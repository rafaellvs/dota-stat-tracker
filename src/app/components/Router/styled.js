import styled from 'styled-components'
import { Router } from '@reach/router'

import CoreSection from 'app/components/core/Section'

import theme from 'app/helpers/theme'

import bg from 'assets/images/bg.jpg'

export const ReachRouter = styled(Router)`
  display: ${({ hide }) => hide ? 'none' : 'block'};
`

export const Section = styled(CoreSection)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: top / cover no-repeat fixed url(${bg});
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding-top: calc(${theme.navbarHeight} + 6rem);
  padding-bottom: 6rem;
  max-width: 1024px;
`

export const Loading = styled.img`
  display: block;
  margin: 0 auto;
  width: 500px;
`
