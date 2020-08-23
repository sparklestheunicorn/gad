import { StoreAccessor, GetDoc, GetDocs, WhereOp } from 'mobx-firelink'
import { GetNodeChildrenL2, GetNodeChildren, GetTermsAttached, GetNodePhrasings } from '@debate-map/server-link'
import { MapNodeL2 } from '@debate-map/server-link'

export function getFinalNodeTitle(node: MapNodeL2) {
  //if (node == null) return "";
  let result = node.current.titles.base
  // in the GAD client/ui, replace "CC" with the full "Climate Change"
  result = result.replace(/(^|\W)CC(\W|$)/g, '$1Climate Change$2')
  return result
}

export const getQuestions = StoreAccessor((s) => () => {
  let mainMap_rootNodeID
  let mainMapID
  // uuid of the root Climate Change debate map, and its root node
  mainMapID = process.env.REACT_APP_MAP_ID
  mainMap_rootNodeID = process.env.REACT_APP_ROOT_NODE_ID

  const questions = GetNodeChildrenL2(mainMap_rootNodeID)
  questions.sort((a, b) => a.createdAt - b.createdAt) // until we have a way to manually specify the order, use node creation-time
  return questions
})

/**
 * Map queries
 */

export const getNodeChildren = StoreAccessor((s) => (nodeId: string) => {
  const nodeChildren = GetNodeChildrenL2(nodeId)
  let nodeChildrenMap = {}

  nodeChildren.forEach((child) => {
    nodeChildrenMap[child._key] = child
  })

  return nodeChildrenMap
})

export const getMapNodeTerms = StoreAccessor((s) => (revisionId: string) => {
  const terms = GetTermsAttached(revisionId)

  return terms.filter((a) => a)
})

export const getMapNodePhrasings = StoreAccessor((s) => (revisionId: string) => {
  const phrasings = GetNodePhrasings(revisionId)

  return phrasings.filter((a) => a)
})

export const getMedia = StoreAccessor((s) => (id: string) => {
  if (!id) return null
  return GetDoc({}, (a) => a.medias.get(id))
})
/*
export const getMedias = StoreAccessor((s) => (): Media[] => {
  return GetDocs({}, (a) => a.medias)
})

export const GetMediasByURL = StoreAccessor((s) => (url: string): Media[] => {
  return GetDocs(
    {
      queryOps: [new WhereOp('url', '==', url)],
    },
    (a) => a.medias,
  )
})
*/
