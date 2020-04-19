/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as styles from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'

export const MapNode = (props) => {
  const { topLevel, title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isExpanded, setIsExpanded } = props

  const theme: Theme = useTheme()

  const [expandedChild, setExpandedChild] = React.useState(null)

  const hasChildren = Object.keys(nodeChildren).length > 0

  const liStyles = topLevel
    ? [styles.mapQuestion(theme)]
    : [
        styles.mapNode(theme),
        styles.expanded(isExpanded),
        styles.canExpand(hasChildren, theme),
        styles.selectedAndCanExpand(isExpanded, hasChildren, theme),
      ]
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
        {topLevel ? <h3 css={styles.questionTitle(theme)}>{title}</h3> : <h4 css={styles.nodeTitle(theme)}>{title}</h4>}
      </li>
      {isExpanded && hasChildren && (
        <ul css={styles.mapNodeChildren} key={`${nodeId}-children`}>
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
