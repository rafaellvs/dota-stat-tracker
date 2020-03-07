export const searchPlayer = (event, input, setResult) => {
  event.preventDefault()

  Promise.all([
    fetch(`https://api.opendota.com/api/search?q=${input}`)
      .then(response => response.json()),
    fetch(`https://api.opendota.com/api/matches/${input}`)
      .then(response => response.json())
  ]).then(values => setResult({ players: values[0], matchResult: values[1] }))
}

export const getMatch = (id, setResult) => {
  fetch(`https://api.opendota.com/api/matches/${id}`)
    .then(response => response.json())
    .then(response => setResult({ match: response }))
}

export const getPlayer = (id, setResult) => {
  Promise.all([
    fetch(`https://api.opendota.com/api/players/${id}`)
      .then(response => response.json()),
    fetch(`https://api.opendota.com/api/players/${id}/heroes`)
      .then(response => response.json()),
    fetch(`https://api.opendota.com/api/players/${id}/matches?limit=5`)
      .then(response => response.json())
  ]).then(values => setResult({ account: values[0], heroes: values[1], matches: values[2] }))
}
