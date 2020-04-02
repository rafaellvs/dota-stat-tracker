import styled from 'styled-components'

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
  background: ${props => props.active ? 'lightgrey' : 'black'};
  color: ${props => props.active ? 'black' : 'white'};
  opacity: ${props => props.active ? '1' : '.6'};
  transition: background .3s, opacity .3s, color .3s;
  cursor: pointer;

  &:hover {
    background: lightgrey;
    color: black;
    opacity: .8;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background: lightgrey;
  padding: 2rem;
`
