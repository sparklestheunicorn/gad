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
import _ from 'lodash'
import keys from 'lodash/keys'

// a node has property multiPremiseArgument = true when its children are multiple premises and a conclusion
// a node's child has polarity 10 if that child is a pro argument, 20 if con, no polarity if neither

export const MapNode = observer((props) => {
  const {
    topLevel,
    title,
    nodeId,
    currentRevision,
    nodeChildrenIds,
    childrenOrder,
    depth,
    multiPremiseArgument,
    setMapDepth,
    setMaxMapDepth,
    isPro,
    isCon,
    isSelected,
    setIsSelected,
    sources,
    references,
    media,
  } = props

  // Style
  const theme: Theme = useTheme()
  const s = styles(theme)

  // Phrasings
  const variantPhrasings = getMapNodePhrasings(nodeId) || []
  const phrasings = [{ text: title }, ...variantPhrasings]

  const [orderedPhrasings, setorderedPhrasings] = React.useState([])
  const [currentPhrasingIndex, setCurrentPhrasingIndex] = React.useState(0)

  // Definitions
  const terms = getMapNodeTerms(currentRevision) || []

  // Children
  const hasChildren = keys(nodeChildrenIds).length > 0
  const childrenKeys = childrenOrder || keys(nodeChildrenIds)
  const [selectedChild, setSelectedChild] = React.useState(null)
  const nodeChildren = getNodeChildren(nodeId)

  // Detail View
  const hasDetails = !topLevel
  const [detailViewOpen, setDetailViewOpen] = React.useState(false)

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

  React.useEffect(() => {
    const { simple, standard, technical } = _.groupBy(phrasings, ({ text }) =>
      _.startsWith(text, '[Simple]') ? 'simple' : _.startsWith(text, '[Technical]') ? 'technical' : 'standard',
    )
    const orderedPhrasings = _.concat(simple, standard, technical)

    setorderedPhrasings(orderedPhrasings)

    var titleIndex = _.map(orderedPhrasings, 'text').indexOf(title)
    setCurrentPhrasingIndex(titleIndex)
  }, [detailViewOpen])

  // console.log('----------------------')
  // console.log(title)
  // console.log('MAPNODE depth', depth)
  // console.log('MAPNODE nodeChildrenIds', nodeChildrenIds)
  // console.log('MAPNODE nodeChildren', nodeChildren)
  // console.log('MAPNODE hasChildren', hasChildren)
  // console.log('MAPNODE childrenKeys', childrenKeys)
  // console.log('MAPNODE childOrder', childrenOrder)
  // console.log('MAPNODE references', references)
  // console.log('----------------------')

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
              {orderedPhrasings[currentPhrasingIndex]?.text || phrasings[currentPhrasingIndex].text}
            </h3>
          ) : (
            <h3 css={s.nodeTitle(detailViewOpen)}>
              {orderedPhrasings[currentPhrasingIndex]?.text || phrasings[currentPhrasingIndex].text}
            </h3>
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
            <NodeDetail
              open={detailViewOpen}
              nodeId={nodeId}
              currentPhrasingIndex={currentPhrasingIndex}
              setCurrentPhrasingIndex={setCurrentPhrasingIndex}
              numPhrasings={phrasings.length}
              terms={terms}
              references={references}
              sources={sources}
              media={media}
            />
            <button css={s.detailToggle} onClick={() => setDetailViewOpen(!detailViewOpen)}>
              {detailViewOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </button>
          </>
        )}
      </li>
      {isSelected && hasChildren && (
        <ul css={s.mapNodeChildren(multiPremiseArgument)} key={`${nodeId}-children`}>
          {childrenKeys.map((childId) => {
            //console.log('CHILDNODE', nodeChildren[childId])
            const currentChild = nodeChildren[childId]
            const isPro = nodeChildrenIds[childId].polarity === 10
            const isCon = nodeChildrenIds[childId].polarity === 20

            return (
              currentChild && (
                <MapNode
                  key={currentChild._key}
                  nodeId={currentChild._key}
                  currentRevision={currentChild.currentRevision}
                  topLevel={false}
                  title={
                    currentChild.current?.titles?.yesNoQuestion ||
                    currentChild.current?.titles?.base ||
                    currentChild.current?.quote?.content
                  }
                  nodeChildrenIds={currentChild.children}
                  childrenOrder={currentChild.childrenOrder}
                  setMapDepth={setMapDepth}
                  setMaxMapDepth={setMaxMapDepth}
                  depth={depth + 1}
                  multiPremiseArgument={currentChild.multiPremiseArgument}
                  isPro={isPro}
                  isCon={isCon}
                  isSelected={currentChild._key == selectedChild}
                  setIsSelected={() => {
                    setSelectedChild(currentChild._key)
                  }}
                  sources={currentChild.current?.quote?.sourceChains?.[0]?.sources}
                  references={currentChild.current?.references}
                  media={currentChild.current?.media}
                />
              )
            )
          })}
        </ul>
      )}
    </>
  )
})
