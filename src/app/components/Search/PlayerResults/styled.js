import styled from 'styled-components'

import theme from 'app/helpers/theme'

import CoreImage from 'app/components/core/Image'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const Result = styled.div`
  text-align: center;
  width: 90px;
  padding: 1rem;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`

export const Avatar = styled(CoreImage)`
  width: 50px;
`
