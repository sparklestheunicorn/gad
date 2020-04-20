/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'
import { isDisabled } from './MapDepthSelector.style'

export const MapNode = (props) => {
  const { topLevel, title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isSelected, setIsSelected } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [selectedChild, setSelectedChild] = React.useState(null)

  const hasChildren = Object.keys(nodeChildren).length > 0

  const focusOnExpanded = () => {
    setMapDepth(depth - 1)
  }

  const expand = () => {
    setIsSelected()
    setMapDepth(depth)
    setMaxMapDepth(depth)
  }

  const selectLeaf = () => {
    setIsSelected()
    setMaxMapDepth(depth - 1)
    setMapDepth(depth - 1)
  }

  return (
    <>
      <li
        key={nodeId}
        css={[topLevel ? s.mapQuestion : s.mapNode, isSelected ? selected(theme) : {}, dropShadow(theme)]}
        onClick={(e) => {
          e.stopPropagation()
          if (hasChildren) {
            if (isSelected) {
              focusOnExpanded()
            } else {
              expand()
            }
          } else {
            selectLeaf()
          }
        }}
      >
        {topLevel && <ConvoCount numberConvos={Object.keys(nodeChildren).length} />}
        {topLevel ? <h3 css={s.questionTitle}>{title}</h3> : <h4 css={s.nodeTitle}>{title}</h4>}
        {hasChildren && (isSelected ? <span css={s.expanded}>►</span> : <span css={s.canExpand}>+</span>)}
      </li>
      {isSelected && hasChildren && (
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
                isSelected={childNodeKey == selectedChild}
                setIsSelected={() => {
                  setSelectedChild(childNodeKey)
                }}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
