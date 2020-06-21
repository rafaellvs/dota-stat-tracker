import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow.default};
  padding: 3rem;
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
