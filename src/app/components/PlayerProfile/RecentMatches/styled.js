import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`

export const Match = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;

  & *:not(img) {
    flex: 1;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`

export const MatchInfo = styled.div``
