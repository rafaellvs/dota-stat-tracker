import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
`

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1rem .5rem;
  background: ${props => props.active ? theme.colors.background : theme.colors.black};
  color: ${props => props.active ? theme.colors.black : theme.colors.white};
  opacity: ${props => props.active ? '1' : '.6'};
  transition: background .3s, opacity .3s, color .3s;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.hover};
    color: ${theme.colors.black};
    opacity: .8;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.colors.background};
  padding: 2rem;
`
