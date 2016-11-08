
export const getMe = () => {
  fetch('/api/v1/user', {
    credentials: 'include'
  })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch((error) => {
    console.log(error)
  })
}

export const isAuthorized = (data) => {
  console.log('isAuthorized', data)
}
