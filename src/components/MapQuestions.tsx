/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapQuestion } from '../components/MapQuestion'
import { MapIntro } from '../components/MapIntro'
import { mapIntroContainer, questionList, responsiveFlex } from '../styles/MapQuestions.style'
import { covidConversation as cc } from '../styles/CovidConversation'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [currentQuestion, setCurrentQuestion] = React.useState(null)

  return (
    <div css={responsiveFlex}>
      <div css={mapIntroContainer}>
        <MapIntro />
      </div>
      <ul css={[cc.questionList, questionList]}>
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
    </div>
  )
}
