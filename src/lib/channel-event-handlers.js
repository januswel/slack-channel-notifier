// @flow

import postMessage from './slack/post-message'
import getChannelInfo from './slack/get-channel-info'

type Channel = {
  name?: string,
}
type ChannelEvent = {
  type: string,
  channel: Channel | string,
}

const channelEventHandlers = {
  channel_created: event => {
    const channelLabel = `<#${event.channel.id}|${event.channel.name}>`
    const message = `created ${channelLabel}`
    return postMessage(message)
  },
  channel_rename: event => {
    const channelLabel = `<#${event.channel.id}|${event.channel.name}>`
    const message = `rename ${channelLabel}`
    return postMessage(message)
  },
  channel_deleted: () => {
    const message = 'deleted'
    return postMessage(message)
  },
  channel_archive: event => {
    return getChannelInfo(event.channel).then(response => {
      const channelLabel = `<#${response.channel.id}|${response.channel.name}>`
      const message = `archive ${channelLabel}`
      return postMessage(message)
    })
  },
  channel_unarchive: event => {
    return getChannelInfo(event.channel).then(response => {
      const channelLabel = `<#${response.channel.id}|${response.channel.name}>`
      const message = `unarchive ${channelLabel}`
      return postMessage(message)
    })
  },
}

const dispatchChannelEvent = (event: ChannelEvent): Promise<LambdaResponse> => {
  return new Promise((resolve, reject) => {
    const channelEventHandlerTypes = Object.keys(channelEventHandlers)
    if (!channelEventHandlerTypes.includes(event.type)) {
      reject(`invalid handler name: ${event.type}`)
      return
    }

    channelEventHandlers[event.type](event).catch(err => {
      reject(err)
    })
  })
}

export default dispatchChannelEvent
