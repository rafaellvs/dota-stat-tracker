import React from 'react'
import { useSelector } from 'react-redux'

import SearchBox from 'app/components/SearchBox'
import SearchTabs from 'app/components/SearchTabs'

import loading from 'assets/images/loading.gif'

import { Container, Loading } from './styled'

const Home = () => {
  const {
    players,
    matches
  } = useSelector(state => state)

  return (
    <Container>
      <SearchBox />

      {
        (players.isFetching || matches.isFetching) &&
          <Loading src={loading} />
      }

      {
        (players.items.length > 0 || matches.items.length > 0) &&
          <SearchTabs />
      }
    </Container>
  )
}

export default Home
