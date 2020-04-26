import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Match = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`
