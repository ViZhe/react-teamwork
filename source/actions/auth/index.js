
export const signUp = (data) => {
  console.log('singUp', data)
}

export const signIn = (data) => {
  fetch('/auth/v1/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  })
    .then(response => response.json())
    .then(result => console.log(result))
}

export const signOut = (data) => {
  console.log('singOut', data)
}
