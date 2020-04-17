/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapQuestion } from '../components/MapQuestion'
import { MapIntro } from '../components/MapIntro'
import { mapIntroContainer, questionList } from '../styles/MapQuestions.style'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [currentQuestion, setCurrentQuestion] = React.useState(null)

  return (
    <>
      <ul css={questionList}>
        {questions.map((question, questionIndex) => (
          <MapQuestion
            question={question}
            questionIndex={questionIndex}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setMapDepth={setMapDepth}
            setMaxMapDepth={setMaxMapDepth}
            questionChildren={questionChildren[questionIndex].childNodes}
          />
        ))}
      </ul>
      {currentQuestion === null && (
        <div css={mapIntroContainer}>
          <MapIntro />
        </div>
      )}
    </>
  )
}
