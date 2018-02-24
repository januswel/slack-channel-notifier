// @flow

import dispatchGeneralEvent from './lib/general-event-handlers'

// eslint-disable-next-line import/prefer-default-export
export const handler = (event: LambdaEvent, context: LambdaContext) => {
  console.log(event)
  if (event.body == null) {
    context.fail('body is required')
    return
  }
  const body = JSON.parse(event.body)
  console.log(body)

  dispatchGeneralEvent(body)
    .then(response => {
      context.succeed(response)
    })
    .catch(err => {
      context.fail(err)
    })
}
