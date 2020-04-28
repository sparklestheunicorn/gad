/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import { getMapNodeTerms, getMapNodePhrasings } from '../firestore/firestore'
import { styles } from './MapNode.style'
import { dropShadow, selected } from '../styles/shared.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'
import { ConvoCount } from './ConvoCount'
import { GetNodePhrasings } from '@debate-map/server-link'
import { NodeDetail } from './NodeDetail'

export const MapNode = observer((props) => {
  const {
    topLevel,
    title,
    nodeId,
    currentRevision,
    nodeChildren,
    depth,
    setMapDepth,
    setMaxMapDepth,
    isSelected,
    setIsSelected,
  } = props

  const theme: Theme = useTheme()
  const s = styles(theme)

  const [selectedChild, setSelectedChild] = React.useState(null)
  const [detailViewOpen, setDetailViewOpen] = React.useState(false)

  const variantPhrasings = getMapNodePhrasings(nodeId)

  /*[
    'A disease in humans caused by a virus that came from wild animals',
    'A zoonotic, severe acute respiratory disease caused by a coronavirus strain of virus',
    'A natural disease caused by a virus contracted from wildlife',
  ] */
  // let variantPhrasings = []
  // React.useEffect(() => {
  //   variantPhrasings = GetNodePhrasings(nodeId)
  // }, [nodeId])
  const phrasings = [{ text: title }, ...variantPhrasings]
  const [currentPhrasingIndex, setCurrentPhrasingIndex] = React.useState(0)
  const nextPhrasing = () => {
    setCurrentPhrasingIndex((currentPhrasingIndex + 1) % phrasings.length)
  }

  const terms = getMapNodeTerms(currentRevision)

  const hasChildren = Object.keys(nodeChildren).length > 0
  const hasDetails = nodeId === 'wlTKYdgGTi-L43GWvEX31Q'

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
              numberConvos={Object.keys(nodeChildren).length}
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
          {Object.keys(nodeChildren).map((childNodeKey) => {
            const childNode = nodeChildren[childNodeKey]

            return (
              <MapNode
                key={childNodeKey}
                nodeId={childNodeKey}
                currentRevision={childNode.currentRevision}
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
})
