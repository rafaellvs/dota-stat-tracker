import styled from 'styled-components'

import CoreImage from 'app/components/core/Image'

export const Container = styled.div``

export const Star = styled(CoreImage)`
  display: ${({ hide }) => hide && 'none'};
  position: absolute;
  width: 150px;
`

export const Medal = styled(CoreImage)`
  width: 150px;
`
