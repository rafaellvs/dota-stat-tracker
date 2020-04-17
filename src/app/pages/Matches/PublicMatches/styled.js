import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 3rem;
`

export const Match = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  transition: .3s;

  * {
    flex: 1;
  }

  &:hover {
    cursor: pointer;
    background: ${theme.colors.hover};
  }
`
