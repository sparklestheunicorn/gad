type ID = string
type Title = {
  base: string
}

export type MapNode = {
  _key: ID
  children: Record<ID, Child>
  current: {
    _key: ID
    node: ID // same as MapNode._key, not same as MapNode.current._key
    titles: Array<Title>
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
