import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const Container = styled.div``

export const Peer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background .3s;

  &:hover {
    cursor: pointer;
    background: ${theme.colors.hover};
  }
`

export const Account = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  height: 70px;
  white-space: nowrap;
`