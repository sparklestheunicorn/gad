import { ChildSet, Media, MediaAttachment } from '@debate-map/server-link'
import { UUID } from 'mobx-firelink'

type Title = {
  base: string
  yesNoQuestion: string
}

export type UINode = {
  nodeId: UUID
  key: UUID
  currentRevision: string
  title: string
  nodeChildrenIds: ChildSet
  sources: Array<string>
  media: MediaAttachment
  childrenOrder: UUID[]
  note: string
  multiPremiseArgument?: boolean // true means node's children are multiple premises and a conclusion
  isPro?: boolean
  isCon?: boolean
}

export type NodeDetail = {
  nodeId: UUID
  terms: Array<any>
  sources: Array<string>
  media: Media
  note: string
}
