import { combineReducers } from 'redux'

import players from './players'
import matches from './matches'

const appReducer = combineReducers({
  players,
  matches
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
