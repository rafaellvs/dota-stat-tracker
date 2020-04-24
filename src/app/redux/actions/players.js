import { resetState } from './resetState'

export const requestPlayers = () => ({
  type: 'REQUEST_PLAYERS'
})

export const receivePlayers = data => ({
  type: 'RECEIVE_PLAYERS',
  items: data,
})

export const receiveSelectedPlayer = data => ({
  type: 'RECEIVE_SELECTED_PLAYER',
  selected: {
    account: data[0],
    heroes: data[1],
    matches: data[2],
    peers: data[3],
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
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/peers`)
        .then(response => response.json()),
    ]).then(data => dispatch(receiveSelectedPlayer(data)))
  }
}
