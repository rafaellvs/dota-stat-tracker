import React from 'react'
import { render } from 'react-dom'

import WebFont from 'webfontloader'

import App from 'app/pages/App'

WebFont.load({
  google: {
    families: ['Rajdhani']
  }
})

render(<App />, document.getElementById('root'))
