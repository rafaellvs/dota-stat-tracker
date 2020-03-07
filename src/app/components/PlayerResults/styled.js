import styled from 'styled-components'

import CoreImage from 'app/components/core/Image'
import CoreText from 'app/components/core/Text'

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
    background-color: #878080;
    cursor: pointer;
  }
`

export const Avatar = styled(CoreImage)`
  width: 50px;
`

export const Name = styled(CoreText)`
  overflow: hidden;
  text-overflow: ellipsis;
`
