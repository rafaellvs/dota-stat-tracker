import styled from 'styled-components'

import theme from 'app/helpers/theme'

import Image from 'app/components/core/Image'

export const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const SearchResult = styled.div`
  display: block;
  text-align: center;
  width: 89px;
  padding: .4rem;

  &:hover {
    background-color: ${theme.colors.hover};
    cursor: pointer;
  }
`

export const Avatar = styled(Image)`
  width: 50px;
`
