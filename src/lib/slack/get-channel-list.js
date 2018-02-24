// @flow

import get from './get'

const ENTRY_POINT = 'https://slack.com/api/channels.list'
const PARAMETERS = {
  token: process.env.SLACK_OAUTH_TOKEN,
  exclude_members: true,
}

export default () => {
  return get(ENTRY_POINT, PARAMETERS)
}
