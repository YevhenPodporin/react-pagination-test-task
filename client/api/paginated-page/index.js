import fetch from 'isomorphic-fetch'

export const paginatedPage = ({ page }) => fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then((response) => {
  return response.json()
})
