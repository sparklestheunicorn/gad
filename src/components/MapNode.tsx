/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'

export const MapNode = (props) => {
  const { topLevel, title, nodeId, nodeChildren, depth, setMapDepth, setMaxMapDepth, isSelected, setIsSelected } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [selectedChild, setSelectedChild] = React.useState(null)
  const [detailViewOpen, setDetailViewOpen] = React.useState(false)

  const hasChildren = Object.keys(nodeChildren).length > 0

  const focusOnSelected = () => {
    setMapDepth(depth - 1)
  }

  const showChildren = () => {
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
      <li key={nodeId} css={[topLevel ? s.mapQuestion : s.mapNode, isSelected ? selected(theme) : {}, dropShadow(theme)]}>
        <div
          css={s.mainLiSection}
          onClick={() => {
            !hasChildren && selectLeaf()
          }}
        >
          {topLevel ? (
            <h3 css={s.questionTitle(detailViewOpen)}>{title}</h3>
          ) : (
            <h4 css={s.nodeTitle(detailViewOpen)}>{title}</h4>
          )}
          {hasChildren && (
            <ConvoCount
              showNumber={topLevel}
              isSelected={isSelected}
              numberConvos={Object.keys(nodeChildren).length}
              onClick={(e) => {
                e.stopPropagation()
                if (isSelected) {
                  focusOnSelected()
                } else {
                  showChildren()
                }
              }}
            />
          )}
          <div css={s.detailView(detailViewOpen)}></div>
        </div>
        <button css={s.detailToggle} onClick={() => setDetailViewOpen(!detailViewOpen)}>
          {detailViewOpen ? '⌃' : '⌄'}
        </button>
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
