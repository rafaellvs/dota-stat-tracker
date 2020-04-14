import styled from 'styled-components'

import CoreText from 'app/components/core/Text'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Bar = styled.div`
  position: relative;
  background: red;
  height: 5px;
  width: 150px;
  margin: 0 1rem;
  border-radius: 20px;
`

export const PercentBar = styled.div`
  background: green;
  width: ${({ winRate }) => `${winRate}%`};
  height: 100%;
  border-radius: 20px;
`

export const WinRate = styled(CoreText)`
  position: absolute;
  transform: translateX(-50%);
  bottom: -5px;
  left: 50%;
  font-weight: bold;
`
