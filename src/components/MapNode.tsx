/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as styles from '../styles/MapNode.style'
import { mapNodeChildren } from '../styles/Map.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapNode = (props) => {
  const { title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isExpanded, setIsExpanded } = props

  const hasChildren = Object.keys(nodeChildren).length > 0

  const [expandedChild, setExpandedChild] = React.useState(null)

  const theme: Theme = useTheme()

  return (
    <>
      <li
        key={nodeId}
        css={[
          styles.rectangle,
          styles.mapNode(theme),
          styles.expanded(isExpanded),
          styles.canExpand(hasChildren, theme),
          styles.selectedAndCanExpand(isExpanded, hasChildren, theme),
          dropShadow(theme),
          isExpanded ? selected(theme) : {},
        ]}
        onClick={(e) => {
          e.stopPropagation()
          if (hasChildren) {
            setMapDepth(depth)
          } else {
            // I am a leaf node, leave the map depth at my parent
            setMaxMapDepth(depth - 1)
            setMapDepth(depth - 1)
          }

          if (!isExpanded) {
            setIsExpanded()
            setMaxMapDepth(depth)
          }
        }}
      >
        <h4>{title}</h4>
      </li>
      {isExpanded && hasChildren && (
        <ul css={mapNodeChildren} key={`${nodeId}-children`}>
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
