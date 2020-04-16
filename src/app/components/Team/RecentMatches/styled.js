import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  flex: 1;
`

export const Match = styled.div`
  padding: 1rem;
  transition: background .3s;
  
  &:hover {
    cursor: pointer;
    background: ${theme.colors.hover};
  }
`

export const MatchInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
  }
`
