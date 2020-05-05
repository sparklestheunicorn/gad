/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { getMapNodeTerms, getMapNodePhrasings, getNodeChildren } from '../firestore/firestore'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'
import { NodeDetail } from './NodeDetail'
import keys from 'lodash/keys'

export const MapNode = observer((props) => {
  const {
    topLevel,
    title,
    nodeId,
    currentRevision,
    nodeChildrenIds,
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
  const hasChildren = keys(nodeChildrenIds).length > 0
  const childrenKeys = childrenOrder || keys(nodeChildrenIds)
  const [selectedChild, setSelectedChild] = React.useState(null)
  const nodeChildren = getNodeChildren(nodeId)

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

  /*  console.log('----------------------')
  console.log(title)
  console.log('MAPNODE depth', depth)
  console.log('MAPNODE nodeChildrenIds', nodeChildrenIds)
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
            <h3
              onClick={() => {
                if (hasChildren) {
                  showChildren()
                }
              }}
              css={s.questionTitle(detailViewOpen)}
            >
              {phrasings[currentPhrasingIndex].text}
            </h3>
          ) : (
            <h3 css={s.nodeTitle(detailViewOpen)}>{phrasings[currentPhrasingIndex].text}</h3>
          )}
          {hasChildren && (
            <ConvoCount
              showNumber={topLevel}
              isSelected={isSelected}
              numberConvos={Object.keys(nodeChildrenIds).length}
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
              {detailViewOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </button>
          </>
        )}
      </li>
      {isSelected && hasChildren && (
        <ul css={s.mapNodeChildren} key={`${nodeId}-children`}>
          {childrenKeys.map((childId) => {
            //console.log('CHILDNODE', nodeChildren[childId])
            const currentChild = nodeChildren[childId]
            return (
              currentChild && (
                <MapNode
                  key={currentChild._key}
                  nodeId={currentChild._key}
                  currentRevision={currentChild.currentRevision}
                  topLevel={false}
                  title={currentChild.current.titles.base}
                  nodeChildrenIds={currentChild.children}
                  childrenOrder={currentChild.childrenOrder}
                  setMapDepth={setMapDepth}
                  setMaxMapDepth={setMaxMapDepth}
                  depth={depth + 1}
                  isSelected={currentChild._key == selectedChild}
                  setIsSelected={() => {
                    setSelectedChild(currentChild._key)
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
