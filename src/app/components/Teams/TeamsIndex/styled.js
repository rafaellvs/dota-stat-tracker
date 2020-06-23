import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div``

export const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: .5rem;
  transition: background .2s;

  & img {
    width: 87px;
    height: 87px;
    margin-bottom: 1rem;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.colors.hover};
  }
`
