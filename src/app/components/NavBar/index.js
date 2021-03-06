import React from 'react'

import { Container, Link } from './styled'

const NavBar = () => {
  return (
    <Container>
      <Link to='/'>Home</Link>
      <Link to='/matchup'>Find Matchup</Link>
      <Link to='/players'>Players</Link>
      <Link to='/matches'>Matches</Link>
      <Link to='/teams'>Teams</Link>
    </Container>
  )
}

export default NavBar
