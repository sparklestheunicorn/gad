/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'

export const MapNode = (props) => {
  const { topLevel, title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isExpanded, setIsExpanded } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [expandedChild, setExpandedChild] = React.useState(null)

  const hasChildren = Object.keys(nodeChildren).length > 0

  const liStyles = topLevel
    ? [s.mapQuestion]
    : [s.mapNode, s.expanded(isExpanded), s.canExpand(hasChildren), s.selectedAndCanExpand(isExpanded, hasChildren)]
  return (
    <>
      <li
        key={nodeId}
        css={[isExpanded ? selected(theme) : {}, dropShadow(theme), liStyles]}
        onClick={(e) => {
          e.stopPropagation()
          if (hasChildren) {
            if (isExpanded) {
              setMapDepth(depth - 1)
            } else {
              setIsExpanded()
              setMapDepth(depth)
              setMaxMapDepth(depth)
            }
          } else {
            // I am a leaf node, leave the map depth at my parent
            setMaxMapDepth(depth - 1)
            setMapDepth(depth - 1)
          }
        }}
      >
        {topLevel && <ConvoCount numberConvos={Object.keys(nodeChildren).length} />}
        {topLevel ? <h3 css={s.questionTitle}>{title}</h3> : <h4 css={s.nodeTitle}>{title}</h4>}
      </li>
      {isExpanded && hasChildren && (
        <ul css={s.mapNodeChildren} key={`${nodeId}-children`}>
          {Object.keys(nodeChildren).map((childNodeKey) => {
            const childNode = nodeChildren[childNodeKey]
            return (
              <MapNode
                key={childNodeKey}
                nodeId={childNodeKey}
                topLevel={false}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                setMapDepth={setMapDepth}
                setMaxMapDepth={setMaxMapDepth}
                depth={depth + 1}
                isExpanded={childNodeKey == expandedChild}
                setIsExpanded={() => {
                  setExpandedChild(childNodeKey)
                }}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
