import { resetState } from './resetState'
import { requestPlayers, receivePlayers } from './players'
import { requestMatches, receiveMatches } from './matches'

export const fetchAll = input => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())
    dispatch(requestPlayers())

    return Promise.all([
      fetch(`https://api.opendota.com/api/search?q=${input}`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/matches/${input}`)
        .then(response => {
          if (!response.ok) return []
          return response.json()
        })
    ]).then(data => {
      dispatch(receivePlayers(data[0]))
      dispatch(receiveMatches(data[1]))
    })
  }
}
