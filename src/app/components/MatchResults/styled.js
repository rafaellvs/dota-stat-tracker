import styled from 'styled-components'

export const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Match = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgrey;
  height: 100%;
  padding: 2rem 1rem;

  &:hover {
    background-color: #878080;
    cursor: pointer;
  }
`

export const RadiantHeroes = styled.div`
  display: flex;
`

export const DireHeroes = styled.div`
  display: flex;
`
