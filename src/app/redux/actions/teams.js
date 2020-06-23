import { resetState } from 'app/redux/actions/resetState'

export const requestTeams = () => ({
  type: 'REQUEST_TEAMS',
})

export const receiveSelectedTeam = (team, players, matches) => ({
  type: 'RECEIVE_SELECTED_TEAM',
  selected: {
    team: team,
    players: players,
    matches: matches,
  },
})

export const fetchSelectedTeam = id =>
  dispatch => {
    dispatch(resetState())
    dispatch(requestTeams())

    return Promise.all([
      fetch(`https://api.opendota.com/api/teams/${id}`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/teams/${id}/players`)
        .then(response => response.json()),
      fetch(`https://api.opendota.com/api/teams/${id}/matches`)
        .then(response => response.json()),
    ]).then(values => dispatch(receiveSelectedTeam(values[0], values[1], values[2])))
  }

export const receiveTeams = data => ({
  type: 'RECEIVE_TEAMS',
  items: data,
})

export const fetchTeams = () =>
  dispatch => {
    dispatch(resetState())
    dispatch(requestTeams())

    return fetch('https://api.opendota.com/api/teams')
      .then(response => response.json())
      .then(data => dispatch(
        receiveTeams(
          data.filter((d, index) => index < 54)
        )
      ))
  }
