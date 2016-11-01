const base = 'https://api.spotify.com/v1/search?q='

export const searchByType = (query, type) => {
  return fetch(base + query + '&type=' + type + '&limit=10')
    .then(res => {
      return res.json()
    })
}
