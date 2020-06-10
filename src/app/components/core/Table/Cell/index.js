import styled from 'styled-components'

const Cell = styled.td`
  width: ${({ width }) => width || 'auto'};
`

export default Cell
