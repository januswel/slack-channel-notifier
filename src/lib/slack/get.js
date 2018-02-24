// @flow

import fetch from 'node-fetch'

export default (entryPoint: string, parameters: Object) => {
  const queryString = Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join('&')
  const url = `${entryPoint}?${queryString}`

  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      throw new Error(err)
    })
}
