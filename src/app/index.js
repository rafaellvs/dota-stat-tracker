import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { LocationProvider } from '@reach/router'
import WebFont from 'webfontloader'

import GlobalStyles from 'app/helpers/globalStyles'
import Router from 'app/components/Router'
import store from 'app/redux/store'

WebFont.load({
  google: {
    families: ['Rajdhani'],
  },
})

render(
  <LocationProvider>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </LocationProvider>,
  document.getElementById('root')
)
