import { getFinalNodeTitle, getMapNodePhrasings, getMapNodeTerms, getNodeChildren, getMedia } from './firestore/firestore'
import { NodeDetail, UINode } from './types'
import { MapNodeL2, Term, ChildSet, Polarity } from '@debate-map/server-link'
import { UUID } from 'mobx-firelink'
import _ from 'lodash'

const flattenLinks = (sourceChains) =>
  _.flatMap(sourceChains, (sourceChain) => _.flatMap(sourceChain.sources, (source) => source.link))

const getLinks = (quote, references, media) =>
  _.flatMap([quote?.sourceChains, references?.sourceChains, media?.sourceChains], flattenLinks)

const getTitle = (titles, quote) => titles?.yesNoQuestion || titles?.base || quote?.content

const getPro = (polarity: Polarity): boolean => Polarity[polarity] === 'Supporting'
const getCon = (polarity: Polarity): boolean => Polarity[polarity] === 'Opposing'

export const nodeToUINode = (node: MapNodeL2, topLevel: boolean, polarity?: number | null): UINode => {
  return {
    key: node._key,
    nodeId: node._key,
    currentRevision: node.currentRevision,
    title: topLevel ? getFinalNodeTitle(node) : getTitle(node.current.titles, node.current.quote),
    childrenOrder: node.childrenOrder,
    nodeChildrenIds: node.children,
    sources: getLinks(node.current?.quote, node.current?.references, node.current?.media),
    multiPremiseArgument: node.multiPremiseArgument,
    media: node.current?.media,
    note: node.current.note,
    isPro: topLevel ? false : getPro(polarity),
    isCon: topLevel ? false : getCon(polarity),
  }
}

export const uiNodeToNodeDetail = (uiNode: UINode): NodeDetail => ({
  nodeId: uiNode.nodeId,
  terms: getTerms(uiNode.currentRevision),
  sources: uiNode.sources,
  media: getMedia(uiNode.media?.id),
  note: uiNode.note,
})

export const uiNodeToChildren = (uiNode: UINode): Array<UINode> => {
  const children = getNodeChildren(uiNode.nodeId)
  const orderedChildrenKeys = getChildrenKeys(uiNode.childrenOrder, uiNode.nodeChildrenIds)
  return orderedChildrenKeys.map((childId) => {
    const child = children[childId]
    // polarity is not returned by getNodeChildren
    const polarity = uiNode.nodeChildrenIds[childId].polarity
    // polarity occurs on an intermediate node, so we need to merge it with its child
    const content = polarity ? _.values(getNodeChildren(child?._key))[0] : child
    return content && nodeToUINode(content, false, polarity)
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
