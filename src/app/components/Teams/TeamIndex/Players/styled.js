import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const TeamPlayers = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Player = styled.div`
  text-align: center;
  padding: .5rem;
  transition: background .3s;

  img {
    width: 100px;
    height: 100px;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.colors.hover};
  }
`
