import { resetState } from './resetState'

export const requestMatches = () => ({
  type: 'REQUEST_MATCHES'
})

export const receiveMatches = data => ({
  type: 'RECEIVE_MATCHES',
  items: data
})

export const fetchMatches = input => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return fetch(`https://api.opendota.com/api/matches/${input}`)
      .then(response => response.json())
      .then(data => dispatch(receiveMatches(data)))
  }
}

export const receiveSelectedMatch = data => ({
  type: 'RECEIVE_SELECTED_MATCH',
  selected: data
})

export const fetchSelectedMatch = id => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return fetch(`https://api.opendota.com/api/matches/${id}`)
      .then(response => response.json())
      .then(data => dispatch(receiveSelectedMatch(data)))
  }
}
