
import {checkHttpStatus} from '../../utils'


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
    .then(checkHttpStatus)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error)
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
    .then(checkHttpStatus)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error)
}

export const signOut = (data) => {
  console.log('singOut', data)
}
