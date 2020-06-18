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
    winrate: data[1],
    heroes: data[2],
    matches: data[3],
    peers: data[4],
  }
})

export const fetchSelectedPlayer = id => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestPlayers())

    return Promise.all([
      fetch(`https://api.opendota.com/api/players/${id}`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/wl`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/heroes`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/matches?limit=100`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/players/${id}/peers`)
        .then(response => response.json()),
    ]).then(data => dispatch(receiveSelectedPlayer(data)))
  }
}
