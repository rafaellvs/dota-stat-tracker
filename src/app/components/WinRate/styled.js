import styled from 'styled-components'

import CoreText from 'app/components/core/Text'

export const Container = styled.div`
  text-align: center;
  min-width: 120px;
`

export const Bar = styled.div`
  position: relative;
  background: red;
  height: 5px;
  margin: 1rem 0;
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
