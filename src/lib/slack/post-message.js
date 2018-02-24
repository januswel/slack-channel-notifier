// @flow

import fetch from 'node-fetch'

const POST_MESSAGE_ENTRY_POINT = `https://hooks.slack.com/services/${
  process.env.SLACK_INCOMING_WEBHOOK
}`
const postMessage = (message: string) => {
  const body = {
    text: message,
  }
  return fetch(POST_MESSAGE_ENTRY_POINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export default postMessage
