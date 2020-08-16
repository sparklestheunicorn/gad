import { getFinalNodeTitle, getMapNodePhrasings, getMapNodeTerms, getNodeChildren, getMedia } from './firestore/firestore'
import { NodeDetail, UINode } from './types'
import { MapNodeL2, Term, ChildSet } from '@debate-map/server-link'
import { UUID } from 'mobx-firelink'
import _ from 'lodash'

const flattenLinks = (sourceChains) =>
  _.flatMap(sourceChains, (sourceChain) => _.flatMap(sourceChain.sources, (source) => source.link))

const getLinks = (sources, references) =>
  _.concat(flattenLinks(sources?.sourceChains), flattenLinks(references?.sourceChains))

const getTitle = (titles, quote) => titles?.yesNoQuestion || titles?.base || quote?.content

const getPro = (polarity) => polarity === 10
const getCon = (polarity) => polarity === 20

export const nodeToUINode = (node: MapNodeL2, topLevel: boolean, polarity?: number | null): UINode => ({
  key: node._key,
  nodeId: node._key,
  currentRevision: node.currentRevision,
  title: topLevel ? getFinalNodeTitle(node) : getTitle(node.current.titles, node.current.quote),
  childrenOrder: node.childrenOrder,
  nodeChildrenIds: node.children,
  sources: getLinks(node.current?.quote?.sourceChains, node.current?.references?.sourceChains),
  multiPremiseArgument: node.multiPremiseArgument,
  media: node.current?.media,
  note: node.current.note,
  isPro: topLevel ? false : getPro(polarity),
  isCon: topLevel ? false : getCon(polarity),
})

export const uiNodeToNodeDetail = (uiNode: UINode): NodeDetail => ({
  nodeId: uiNode.nodeId,
  terms: getTerms(uiNode.currentRevision),
  sources: uiNode.sources,
  media: getMedia(uiNode.media?.id),
  note: uiNode.note,
})

export const uiNodeToChildren = (uiNode: UINode): Array<UINode> => {
  const nodeChildren = getNodeChildren(uiNode.nodeId)
  const childrenKeys = getChildrenKeys(uiNode.childrenOrder, uiNode.nodeChildrenIds)
  return childrenKeys.map((childId) => {
    const currentChild = nodeChildren[childId]
    // polarity is not returned by getNodeChildren
    const polarity = uiNode.nodeChildrenIds[childId].polarity
    return currentChild ? nodeToUINode(currentChild, false, polarity) : null
  })
}

export const getPhrasings = (nodeId: UUID, title: string): Array<{ text: string }> => {
  const variantPhrasings = getMapNodePhrasings(nodeId) || []
  return [{ text: title }, ...variantPhrasings]
}

export const sortedPhrasings = (phrasings: Array<{ text: string }>): Array<{ text: string }> => {
  const { simple, standard, technical } = _.groupBy(phrasings, ({ text }) =>
    _.startsWith(text, '[Simple]') ? 'simple' : _.startsWith(text, '[Technical]') ? 'technical' : 'standard',
  )
  return _.concat(simple, standard, technical)
}

export const getTitleIndex = (orderedPhrasings: Array<{ text: string }>, title: string): number => {
  return _.map(orderedPhrasings, 'text').indexOf(title)
}

const getTerms = (currentRevision: string): Term[] => getMapNodeTerms(currentRevision) || []

export const getHasChildren = (nodeChildrenIds: ChildSet): boolean => _.keys(nodeChildrenIds).length > 0
const getChildrenKeys = (childrenOrder: string[], nodeChildrenIds: ChildSet): string[] =>
  childrenOrder || _.keys(nodeChildrenIds)
