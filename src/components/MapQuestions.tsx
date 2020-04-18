/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { MapQuestion } from '../components/MapQuestion'
import { MapIntro } from '../components/MapIntro'
import { questionList, responsiveFlex } from '../styles/MapQuestions.style'
import { mapIntroContainer } from '../styles/MapIntro.style'
import { useTheme } from 'emotion-theming'
import { Theme } from '@emotion/types'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [currentQuestion, setCurrentQuestion] = React.useState(null)

  const theme: Theme = useTheme()

  return (
    <div css={responsiveFlex}>
      <div css={mapIntroContainer(theme)}>
        <MapIntro />
      </div>
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
    </div>
  )
}
