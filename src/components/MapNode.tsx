import React from 'react'
import classNames from 'classnames'

export const MapNode = (props) => {
  const { title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isExpanded, setIsExpanded } = props

  const hasChildren = Object.keys(nodeChildren).length > 0

  const [expandedChild, setExpandedChild] = React.useState(null)

  console.log(props)
  return (
    <>
      <li
        key={nodeId}
        className={classNames('map-node', 'rectangle', { expanded: isExpanded }, { 'can-expand': hasChildren })}
        onClick={(e) => {
          e.stopPropagation()
          if (hasChildren) {
            setMapDepth(depth)
          } else {
            setMaxMapDepth(depth - 1)
            setMapDepth(depth - 1)
          }

          if (!isExpanded) {
            setIsExpanded()
            setMaxMapDepth(depth)
          }
        }}
      >
        <h3>{title}</h3>
      </li>
      {isExpanded && hasChildren && (
        <ul className="map-node-children" key={`${nodeId}-children`}>
          {Object.keys(nodeChildren).map((childNodeKey) => {
            const childNode = nodeChildren[childNodeKey]
            return (
              <MapNode
                nodeId={childNodeKey}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                setMapDepth={setMapDepth}
                setMaxMapDepth={setMaxMapDepth}
                depth={depth + 1}
                isExpanded={childNodeKey == expandedChild}
                setIsExpanded={() => {
                  setExpandedChild(childNodeKey)
                }}
                key={childNodeKey}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
