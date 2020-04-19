/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import * as styles from '../styles/MapNode.style'
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
    ? [styles.mapQuestion(theme), isExpanded ? selected(theme) : {}, dropShadow(theme)]
    : [
        styles.rectangle,
        styles.mapNode(theme),
        styles.expanded(isExpanded),
        styles.canExpand(hasChildren, theme),
        styles.selectedAndCanExpand(isExpanded, hasChildren, theme),
        dropShadow(theme),
        isExpanded ? selected(theme) : {},
      ]
  return (
    <>
      <li
        key={nodeId}
        css={liStyles}
        onClick={(e) => {
          e.stopPropagation()
          if (hasChildren) {
            if (isExpanded) {
              setMapDepth(depth - 1)
            } else {
              setMapDepth(depth)
            }
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
        {topLevel && <ConvoCount numberConvos={Object.keys(nodeChildren).length} />}
        {topLevel ? <h3 css={[styles.title(theme)]}>{title}</h3> : <h4>{title}</h4>}
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
