/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { getMapNodeTerms, getMapNodePhrasings, getMapNode, getChildIds } from '../firestore/firestore'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'
import { NodeDetail } from './NodeDetail'

export const MapNode = observer((props) => {
  const {
    topLevel,
    title,
    nodeId,
    currentRevision,
    children,
    //nodeChildren,
    childrenOrder,
    depth,
    setMapDepth,
    setMaxMapDepth,
    isSelected,
    setIsSelected,
  } = props

  // Style
  const theme: Theme = useTheme()
  const s = styles(theme)

  // Phrasings
  const variantPhrasings = getMapNodePhrasings(nodeId) || []
  const phrasings = [{ text: title }, ...variantPhrasings]
  const [currentPhrasingIndex, setCurrentPhrasingIndex] = React.useState(0)

  // Definitions
  const terms = getMapNodeTerms(currentRevision) || []

  // Children
  const hasChildren = children && Object.keys(children).length > 0
  const childrenKeys = childrenOrder || (children && Object.keys(children))
  const [selectedChild, setSelectedChild] = React.useState(null)
  const nodeChildren = getChildIds(nodeId)

  // Detail View
  const hasDetails = variantPhrasings.length > 0 || terms.length > 0
  const [detailViewOpen, setDetailViewOpen] = React.useState(false)

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
  /*
  console.log('----------------------')
  console.log(title)
  console.log('MAPNODE depth', depth)
  console.log('MAPNODE children', children)
  console.log('MAPNODE nodeChildren', nodeChildren)
  console.log('MAPNODE hasChildren', hasChildren)
  console.log('MAPNODE childrenKeys', childrenKeys)
  console.log('MAPNODE childOrder', childrenOrder)
  console.log('----------------------')
*/
  return (
    <>
      <li key={nodeId} css={[topLevel ? s.mapQuestion : s.mapNode, dropShadow(theme)]}>
        <div
          css={[s.liHeader(hasDetails), isSelected ? selected(theme) : {}]}
          onClick={() => {
            !hasChildren && selectLeaf()
          }}
        >
          {topLevel ? (
            <h3 css={s.questionTitle(detailViewOpen)}>{phrasings[currentPhrasingIndex].text}</h3>
          ) : (
            <h4 css={s.nodeTitle(detailViewOpen)}>{phrasings[currentPhrasingIndex].text}</h4>
          )}
          {hasChildren && (
            <ConvoCount
              showNumber={topLevel}
              isSelected={isSelected}
              numberConvos={Object.keys(children).length}
              hasDetails={hasDetails}
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
        </div>
        {hasDetails && (
          <>
            <div css={s.detailView(detailViewOpen)}>
              {detailViewOpen && (
                <NodeDetail
                  nodeId={nodeId}
                  currentPhrasingIndex={currentPhrasingIndex}
                  setCurrentPhrasingIndex={setCurrentPhrasingIndex}
                  numPhrasings={phrasings.length}
                  terms={terms}
                />
              )}
            </div>
            <button css={s.detailToggle} onClick={() => setDetailViewOpen(!detailViewOpen)}>
              {detailViewOpen ? '⌃' : '⌄'}
            </button>
          </>
        )}
      </li>
      {isSelected && hasChildren && (
        <ul css={s.mapNodeChildren} key={`${nodeId}-children`}>
          {nodeChildren.map((childNode) => {
            //console.log('CHILDNODE', childNode)

            return (
              childNode && (
                <MapNode
                  key={childNode._key}
                  nodeId={childNode._key}
                  currentRevision={childNode.currentRevision}
                  topLevel={false}
                  title={childNode.current.titles.base}
                  children={childNode.children}
                  childrenOrder={childNode.childrenOrder}
                  //nodeChildren={childNode.childNodes}
                  setMapDepth={setMapDepth}
                  setMaxMapDepth={setMaxMapDepth}
                  depth={depth + 1}
                  isSelected={childNode._key == selectedChild}
                  setIsSelected={() => {
                    setSelectedChild(childNode._key)
                  }}
                />
              )
            )
          })}
        </ul>
      )}
    </>
  )
})
