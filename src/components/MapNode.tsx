/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'
import { NodeDetail } from './NodeDetail'
import Media from './Media'

import {
  getPhrasings,
  sortedPhrasings,
  getTitleIndex,
  getHasChildren,
  uiNodeToNodeDetail,
  uiNodeToChildren,
} from '../selectors'

export const MapNode = observer((props) => {
  const {
    topLevel,
    title,
    nodeId,
    nodeChildrenIds,
    depth,
    multiPremiseArgument,
    setMapDepth,
    setMaxMapDepth,
    isPro,
    isCon,
    isSelected,
    setIsSelected,
  } = props

  // Style
  const theme: Theme = useTheme()
  const s = styles(theme)

  // Detail View
  const hasDetails = !topLevel
  const [detailViewOpen, setDetailViewOpen] = React.useState(false)

  // Phrasings
  const phrasings = getPhrasings(nodeId, title)
  const [orderedPhrasings, setOrderedPhrasings] = React.useState([])
  const [currentPhrasingIndex, setCurrentPhrasingIndex] = React.useState(0)

  React.useEffect(() => {
    const orderedPhrasings = sortedPhrasings(phrasings)
    const titleIndex = getTitleIndex(orderedPhrasings, title)
    setOrderedPhrasings(orderedPhrasings)
    setCurrentPhrasingIndex(titleIndex)
  }, [detailViewOpen])

  const renderTitle = () => orderedPhrasings[currentPhrasingIndex]?.text || phrasings[currentPhrasingIndex]?.text

  // Children
  const [selectedChild, setSelectedChild] = React.useState(null)
  const hasChildren = getHasChildren(nodeChildrenIds)
  const children = uiNodeToChildren(props)

  const focusOnSelected = () => {
    setMapDepth(depth - 1)
  }

  const showChildren = () => {
    setIsSelected()
    setMapDepth(depth)
    setMaxMapDepth(depth)
    document.getElementById('appContainer').scrollTop = 0
  }

  const selectLeaf = () => {
    setIsSelected()
    setMaxMapDepth(depth - 1)
    setMapDepth(depth - 1)
  }

  const mainMedia = uiNodeToNodeDetail(props).media

  return (
    <>
      <li
        key={nodeId}
        css={[topLevel ? s.mapQuestion : s.mapNode, dropShadow(theme), isPro ? s.proNode : null, isCon ? s.conNode : null]}
      >
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
              {renderTitle()}
            </h3>
          ) : (
            <h3 css={s.nodeTitle(detailViewOpen)}>{renderTitle()}</h3>
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
        {mainMedia ? <Media {...mainMedia} /> : null}

        {hasDetails && (
          <>
            {
              <NodeDetail
                open={detailViewOpen}
                currentPhrasingIndex={currentPhrasingIndex}
                setCurrentPhrasingIndex={setCurrentPhrasingIndex}
                numPhrasings={phrasings.length}
                {...uiNodeToNodeDetail(props)}
              />
            }
            <button css={s.detailToggle} onClick={() => setDetailViewOpen(!detailViewOpen)}>
              {detailViewOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </button>
          </>
        )}
      </li>
      {isSelected && hasChildren && (
        <ul css={s.mapNodeChildren(multiPremiseArgument)} key={`${nodeId}-children`}>
          {children.map((currentChild) => {
            return (
              currentChild && (
                <MapNode
                  {...currentChild}
                  topLevel={false}
                  setMapDepth={setMapDepth}
                  setMaxMapDepth={setMaxMapDepth}
                  depth={depth + 1}
                  isSelected={currentChild.nodeId === selectedChild}
                  setIsSelected={() => {
                    setSelectedChild(currentChild.nodeId)
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
