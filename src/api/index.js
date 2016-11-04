const base = 'https://api.spotify.com/v1/search?q='

export const fetchByType = (query, type, offset = 0, limit = 10) => {
  return fetch(base + query + '&type=' + type + '&offset=' + offset + '&limit=' + limit)
    .then(res => {
      return res.json()
    })
}
