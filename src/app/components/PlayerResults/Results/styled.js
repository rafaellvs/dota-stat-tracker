import styled from 'styled-components'

import theme from 'app/helpers/theme'

import CoreImage from 'app/components/core/Image'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Result = styled.div`
  display: block;
  text-align: center;
  width: 90px;
  padding: .4rem;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`

export const Avatar = styled(CoreImage)`
  width: 50px;
`