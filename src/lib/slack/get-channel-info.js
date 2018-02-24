// @flow

import get from './get'

const ENTRY_POINT = 'https://slack.com/api/channels.info'

export default (channelId: string) => {
  const parameters = {
    token: process.env.SLACK_OAUTH_TOKEN,
    channel: channelId,
  }
  return get(ENTRY_POINT, parameters)
}
