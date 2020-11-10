const base = 'http://kaffi.life/api'
// const base = 'http://localhost:4567'

function afetch(route) {
  const response = fetch(`${base}${route}`)
    .then(response => response.json())
  return response
}

function getRhymes(word) {
  return afetch(`/rhymes/${word}`)
}

function getPoem() {
  return afetch('/poems/poem/')
}

export {
  getRhymes,
  getPoem
}
