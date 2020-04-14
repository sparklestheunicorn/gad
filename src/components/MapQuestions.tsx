import * as React from 'react'
import { MapQuestion } from '../components/MapQuestion'

export const MapQuestions = (props) => {
  const { questions, questionChildren, setMapDepth, setMaxMapDepth } = props

  const [currentQuestion, setCurrentQuestion] = React.useState(null)

  return (
    <ul className="question-list">
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
  )
}
