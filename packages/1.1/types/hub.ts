import { ExtensionMap } from '@json-feed-types/common'

type Hub<Extensions extends ExtensionMap = {}> = Extensions['hub'] & {
  type: string
  url: string
}

export default Hub
