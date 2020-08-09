import { getFinalNodeTitle } from './firestore/firestore'
import _ from 'lodash'

export const nodeToMapNode = (node) => ({
  key: node._key,
  nodeId: node._key,
  currentRevision: node.currentRevision,
  title: getFinalNodeTitle(node),
  childrenOrder: node.childrenOrder,
  nodeChildrenIds: node.children,
})

export const sortedPhrasings = (phrasings) => {
  const { simple, standard, technical } = _.groupBy(phrasings, ({ text }) =>
    _.startsWith(text, '[Simple]') ? 'simple' : _.startsWith(text, '[Technical]') ? 'technical' : 'standard',
  )
  return _.concat(simple, standard, technical)
}

export const getTitleIndex = (orderedPhrasings, title) => {
  return _.map(orderedPhrasings, 'text').indexOf(title)
}
