import { combineReducers } from 'redux'

import players from './players'
import matches from './matches'
import teams from './teams'

const appReducer = combineReducers({
  players,
  matches,
  teams,
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
