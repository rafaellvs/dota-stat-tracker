import styled from 'styled-components'

const Image = styled.img`
  width: ${({ width }) => width || 'auto'};
  box-sizing: content-box;
`

export default Image
