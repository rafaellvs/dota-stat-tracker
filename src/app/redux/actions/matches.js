import { resetState } from './resetState'

export const requestMatches = () => ({
  type: 'REQUEST_MATCHES'
})

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

export const receiveMatches = data => ({
  type: 'RECEIVE_MATCHES',
  items: data
})

export const fetchMatchups = (idA, idB) => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return fetch(`https://api.opendota.com/api/findMatches?teamA[]=${idA}&teamB[]=${idB}`)
      .then(response => response.json())
      .then(data => dispatch(receiveMatches(data)))
  }
}

export const receiveProMatches = data => ({
  type: 'RECEIVE_PRO_MATCHES',
  proMatches: data,
})

export const fetchProMatches = () => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return fetch('https://api.opendota.com/api/proMatches')
      .then(response => response.json())
      .then(data => dispatch(receiveProMatches(data)))
  }
}

export const receivePublicMatches = data => ({
  type: 'RECEIVE_PUBLIC_MATCHES',
  publicMatches: data,
})

export const fetchPublicMatches = () => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return fetch('https://api.opendota.com/api/publicMatches?mmr_descending=1')
      .then(response => response.json())
      .then(data => dispatch(receivePublicMatches(data)))
  }
}

export const receiveAllMatches = (proMatches, publicMatches) => ({
  type: 'RECEIVE_ALL_MATCHES',
  proMatches: proMatches,
  publicMatches: publicMatches,
})

export const fetchAllMatches = () => {
  return dispatch => {
    dispatch(resetState())
    dispatch(requestMatches())

    return Promise.all([
      fetch('https://api.opendota.com/api/proMatches')
        .then(response => response.json()),
      fetch('https://api.opendota.com/api/publicMatches?mmr_descending=1')
        .then(response => response.json())
    ]).then(values => dispatch(receiveAllMatches(values[0], values[1])))
  }
}
