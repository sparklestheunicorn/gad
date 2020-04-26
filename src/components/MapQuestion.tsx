/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapNode } from '../components/MapNode'
import { getFinalNodeTitle } from '../firestore/firestore'
import { styles } from './MapQuestion.style'
import { selected, dropShadow } from '../styles/shared.style'
import { styles as mapNodeStyles } from './MapNode.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapQuestion = (props) => {
  const {
    question,
    currentQuestion,
    setMapDepth,
    setMaxMapDepth,
    setCurrentQuestion,
    questionChildren,
    questionIndex,
  } = props

  const theme: Theme = useTheme()
  const s = styles(theme)
  const mapNodeS = mapNodeStyles(theme)

  const [expandedChild, setExpandedChild] = React.useState(null)

  const isSelected = question.current._key == currentQuestion

  const hasChildren = Object.keys(questionChildren).length > 0

  return (
    <>
      <li
        css={[s.mapQuestion, isSelected ? selected(theme) : {}, dropShadow(theme)]}
        key={questionIndex}
        onClick={() => {
          if (hasChildren) {
            if (isSelected) {
              setMapDepth(0)
            } else {
              setMapDepth(1)
            }
            setCurrentQuestion(question.current._key)
          } else {
            setMapDepth(0)
            setMaxMapDepth(0)
          }
        }}
      >
        <div css={s.convoCount}>
          <p>{Object.keys(questionChildren).length}</p>
          <p>convos</p>
        </div>
        <h3 css={[s.title]}>{getFinalNodeTitle(question)}</h3>
      </li>
      {isSelected && (
        <ul css={mapNodeS.mapNodeChildren} key={`${questionIndex}-children`}>
          {Object.keys(questionChildren).map((childNodeKey) => {
            const childNode = questionChildren[childNodeKey]
            return (
              <MapNode
                nodeId={childNodeKey}
                currentRevision={childNode.currentRevision}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                depth={2}
                setMapDepth={setMapDepth}
                setMaxMapDepth={setMaxMapDepth}
                isExpanded={childNodeKey === expandedChild}
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
