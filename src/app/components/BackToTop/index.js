import React from 'react'

import { Button } from './styled'

const BackToTop = () =>
  <Button onClick={() => scrollTo(0, 0)}>
    back to top ^
  </Button>

export default BackToTop
