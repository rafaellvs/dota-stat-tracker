import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: ${theme.boxShadow.noBreadcrumbs};
`

export const TabsContainer = styled.div`
  display: flex;
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 1rem .5rem;
  background: ${({ active }) => active ? theme.colors.background : theme.colors.inactiveTab};
  color: ${theme.colors.white};
  transition: background .3s;
  cursor: pointer;

  ${
    ({ active }) => !active && `
      &:hover {
        background: ${theme.colors.hover};
        opacity: .8;
      }
    `
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background};
  padding: 3rem;
`
