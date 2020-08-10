import { getFinalNodeTitle, getMapNodePhrasings, getMapNodeTerms, getNodeChildren } from './firestore/firestore'
import _ from 'lodash'

export const nodeToMapNode = (node) => ({
  key: node._key,
  nodeId: node._key,
  currentRevision: node.currentRevision,
  title: getFinalNodeTitle(node),
  childrenOrder: node.childrenOrder,
  nodeChildrenIds: node.children,
})

export const mapNodeToNodeDetail = (mapNode) => ({
  nodeId: mapNode.nodeId,
  numPhrasings: getPhrasings(mapNode.nodeId, mapNode.title).length, //TODO
  terms: getTerms(mapNode.currentRevision),
  references: mapNode.references,
  sources: mapNode.sources,
  media: mapNode.media,
  note: mapNode.note,
})

export const mapNodeToChildren = (mapNode) => {
  const nodeChildren = getNodeChildren(mapNode.nodeId)
  const childrenKeys = getChildrenKeys(mapNode.childrenOrder, mapNode.nodeChildrenIds)
  return childrenKeys.map((childId) => {
    const currentChild = nodeChildren[childId]
    return currentChild ? childToMapNode(currentChild) : null
  })
}

// TODO figure out if this and nodeToMapNode can be the same
const childToMapNode = (child) => ({
  key: child._key,
  nodeId: child._key,
  currentRevision: child.currentRevision,
  title: child.current?.titles?.yesNoQuestion || child.current?.titles?.base || child.current?.quote?.content,
  note: child.note,
  nodeChildrenIds: child.children,
  childrenOrder: child.childrenOrder,
  multiPremiseArgument: child.multiPremiseArgument,
  isPro: child.polarity === 10,
  isCon: child.polarity === 20,
  sources: child.current?.quote?.sourceChains?.[0]?.sources,
  references: child.current?.references,
  media: child.current?.media,
})

export const getPhrasings = (nodeId, title) => {
  const variantPhrasings = getMapNodePhrasings(nodeId) || []
  return [{ text: title }, ...variantPhrasings]
}

export const sortedPhrasings = (phrasings) => {
  const { simple, standard, technical } = _.groupBy(phrasings, ({ text }) =>
    _.startsWith(text, '[Simple]') ? 'simple' : _.startsWith(text, '[Technical]') ? 'technical' : 'standard',
  )
  return _.concat(simple, standard, technical)
}

export const getTitleIndex = (orderedPhrasings, title) => {
  return _.map(orderedPhrasings, 'text').indexOf(title)
}

export const getTerms = (currentRevision) => getMapNodeTerms(currentRevision) || []

export const getHasChildren = (nodeChildrenIds) => _.keys(nodeChildrenIds).length > 0
export const getChildrenKeys = (childrenOrder, nodeChildrenIds) => childrenOrder || _.keys(nodeChildrenIds)
export const fetchNodeChildren = (nodeId) => getNodeChildren(nodeId)
