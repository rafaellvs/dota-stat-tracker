import React from 'react'

import { Container, Link } from './styled'

const NavBar = () => {
  return (
    <Container>
      <Link to='/'>Home</Link>
      <Link to='/matchup'>Find Matchup</Link>
    </Container>
  )
}

export default NavBar
