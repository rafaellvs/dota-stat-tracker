import { resetState } from './resetState'

export const requestPlayers = () => ({
  type: 'REQUEST_PLAYERS'
})

export const receivePlayers = data => ({
  type: 'RECEIVE_PLAYERS',
  items: data
})

export const receiveSelectedPlayer = (account, heroes, matches) => ({
  type: 'RECEIVE_SELECTED_PLAYER',
  selected: {
    account: account,
    heroes: heroes,
    matches: matches
  }
})

export const fetchSelectedPlayer = id => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestPlayers())

    return Promise.all([
      fetch(`https://api.opendota.com/api/players/${id}`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/heroes`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/matches?limit=5`)
        .then(response => response.json())
    ]).then(values => dispatch(receiveSelectedPlayer(values[0], values[1], values[2])))
  }
}
