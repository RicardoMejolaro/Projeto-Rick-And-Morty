export const goToHome = (history) => {
  history.push('/')
}

export const goToCharacterDetails = (history, id) => {
  history.push(`/character/${id}`)
}
