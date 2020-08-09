import { getFinalNodeTitle } from './firestore/firestore'

export const nodeToMapNode = (node) => ({
  key: node._key,
  nodeId: node._key,
  currentRevision: node.currentRevision,
  title: getFinalNodeTitle(node),
  childrenOrder: node.childrenOrder,
  nodeChildrenIds: node.children,
})
