import styled from 'styled-components'

export const Container = styled.div`
  opacity: ${props => props.hasContent ? '1' : '0'};
`
