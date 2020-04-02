import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'app/redux/store'

import WebFont from 'webfontloader'

import App from 'app/pages/App'

WebFont.load({
  google: {
    families: ['Rajdhani']
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
