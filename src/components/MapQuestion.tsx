/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapNode } from '../components/MapNode'
import { getFinalNodeTitle } from '../firestore/firestore'
import * as styles from '../styles/MapQuestion.style'
import { mapNodeChildren } from '../styles/Map.style'
import { covidConversation as cc } from '../styles/CovidConversation'

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

  const [expandedChild, setExpandedChild] = React.useState(null)

  const expanded = question.current._key == currentQuestion

  return (
    <>
      <li
        css={[styles.mapQuestion, cc.mapNode]}
        key={questionIndex}
        onClick={() => {
          setMapDepth(1)
          setCurrentQuestion(question.current._key)
        }}
      >
        <div css={[styles.knockout, styles.convoCount]}>
          <p>{Object.keys(questionChildren).length}</p>
          <p>Convos</p>
        </div>
        <h3 css={[styles.title, cc.question.title]}>{getFinalNodeTitle(question)}</h3>
      </li>
      {expanded && (
        <ul css={mapNodeChildren} key={`${questionIndex}-children`}>
          {Object.keys(questionChildren).map((childNodeKey) => {
            const childNode = questionChildren[childNodeKey]
            return (
              <MapNode
                nodeId={childNodeKey}
                title={childNode.title}
                nodeChildren={childNode.childNodes}
                depth={2}
                setMapDepth={setMapDepth}
                setMaxMapDepth={setMaxMapDepth}
                isExpanded={childNodeKey === expandedChild}
                setIsExpanded={() => {
                  setExpandedChild(childNodeKey)
                }}
                key={childNodeKey}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}
