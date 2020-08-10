type ID = string
type Title = {
  base: string
  yesNoQuestion: string
}

// a node has property multiPremiseArgument = true when its children are multiple premises and a conclusion
// a node's child has polarity 10 if that child is a pro argument, 20 if con, no polarity if neither
export type MapNode = {
  _key: ID
  children: Record<ID, Child>
  current: {
    _key: ID
    node: ID // same as MapNode._key, not same as MapNode.current._key
    titles: Array<Title>
    currentRevision: string
    argumentType
    equation
    media
    quote
    references
    note: string
  }
  type // enum
}

// unloaded node
type Child = {
  polarity // enum 10 is pro, 20 is con
  form
  _key: ID
}

// this is created in App
export type NodeChildren = {
  childNodes: Record<ID, MapNode> // this comes from getNodeChildren
  questionId: ID
}
