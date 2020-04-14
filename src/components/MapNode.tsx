import React from 'react'
import { getMapNodeChildren, getFinalNodeTitle } from '../firestore/firestore'
import { reaction } from 'mobx'

export const MapNode = (props) => {
  const { title, nodeId, nodeChildren, depth, setMapDepth } = props

  const [isExpanded, setIsExpanded] = React.useState(false)

  console.log('MAP NODE', props)

  return (
    <>
      <li
        className="map-node rectangle"
        onClick={(e) => {
          e.stopPropagation()
          setMapDepth(depth)
          setIsExpanded(!isExpanded)
        }}
      >
        <h3>{title}</h3>
      </li>
      <ul className="map-node-children">
        {isExpanded &&
          nodeChildren &&
          Object.keys(nodeChildren).map((childNodeKey) => {
            const childNode = nodeChildren[childNodeKey]
            return (
              <MapNode
                nodeId={childNodeKey}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                depth={1}
                key={childNodeKey}
              />
            )
          })}
      </ul>
    </>
  )
}
