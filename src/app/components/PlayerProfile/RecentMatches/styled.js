import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
`

export const Match = styled.div`
  width: 110px;
  padding: 0 1rem;
  text-align: center;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`
