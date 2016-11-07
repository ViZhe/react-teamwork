
export const signUp = (data) => {
  fetch('/auth/v1/signup', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  })
    .then(response => response.json())
    .then(result => console.log(result))
}

export const signIn = (data) => {
  fetch('/auth/v1/signin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
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
