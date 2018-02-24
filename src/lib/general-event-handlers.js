// @flow

import dispatchChannelEvent from './channel-event-handlers'

type Body = {
  type: string,
}

const generalEventHandlers = {
  url_verification: body => {
    return new Promise(resolve => {
      resolve({
        statusCode: 200,
        body: body.challenge,
      })
    })
  },
  event_callback: body => {
    const event = body.event
    console.log(event)

    return dispatchChannelEvent(event)
  },
}

const dispatchGeneralEvent = (body: Body): Promise<LambdaResponse> => {
  return new Promise((resolve, reject) => {
    const handlerTypes = Object.keys(generalEventHandlers)
    if (!handlerTypes.includes(body.type)) {
      reject(`invalid handler name: ${body.type}`)
      return
    }

    generalEventHandlers[body.type](body)
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default dispatchGeneralEvent
