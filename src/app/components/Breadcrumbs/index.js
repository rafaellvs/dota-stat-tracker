import React from 'react'
import { useLocation } from '@reach/router'

import Text from 'app/components/core/Text'
import RouterLink from 'app/components/core/RouterLink'

import { Container } from './styled'

const Breadcrumbs = () => {
  const url = useLocation()
  const paths = url.pathname.split('/').filter(path => path)
  let currentPath = ''

  const hide =
    url.pathname.includes('search') ||
    url.pathname === '/' ||
    url.pathname === '/matchup'

  return (
    <Container hide={hide}>
      <RouterLink to='/'>home</RouterLink>

      {
        paths.map((path, index) => {
          currentPath += `${path}/`

          return (
            <React.Fragment key={index}>
              <Text component='span'>
                {' > '}
              </Text>
              <RouterLink to={currentPath}>
                {path}
              </RouterLink>
            </React.Fragment>
          )
        })
      }
    </Container>
  )
}

export default Breadcrumbs
