import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${({ width }) => width || 'auto'};
  box-sizing: content-box;
`
