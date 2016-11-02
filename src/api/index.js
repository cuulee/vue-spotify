const base = 'https://api.spotify.com/v1/search?q='

export const fetchTypeByName = (query, type, offset = 0) => {
  return fetch(base + query + '&type=' + type + '&offset=' + offset + '&limit=10')
    .then(res => {
      return res.json()
    })
}
