import * as React from 'react'
import { MapNode } from '../components/MapNode'

import { getFinalNodeTitle } from '../firestore/firestore'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth } = props

  const [currentQuestion, setCurrentQuestion] = React.useState(null)

  return (
    <ul className="question-list">
      {questions.map((question, questionIndex) => {
        return (
          <>
            <li
              className="map-question drop-shadow"
              key={questionIndex}
              onClick={() => {
                setMapDepth(0)
                setCurrentQuestion(question.current._key)
              }}
            >
              <div className="knockout convo-count">
                <p>{Object.keys(questionChildren[questionIndex].childNodes).length}</p>
                <p>Convos</p>
              </div>
              <div className="map-question-title">{getFinalNodeTitle(question)}</div>
            </li>
            {question.current._key == currentQuestion && (
              <ul className="question-children fade-in">
                {Object.keys(questionChildren[questionIndex].childNodes).map((childNodeKey) => {
                  const childNode = questionChildren[questionIndex].childNodes[childNodeKey]
                  return (
                    <MapNode
                      nodeId={childNodeKey}
                      title={childNode.title}
                      nodeChildren={childNode.childNodes}
                      depth={1}
                      setMapDepth={setMapDepth}
                      key={childNodeKey}
                    />
                  )
                })}
              </ul>
            )}
          </>
        )
      })}
    </ul>
  )
}
