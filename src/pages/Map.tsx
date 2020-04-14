import * as React from 'react'
import { observer } from 'mobx-react'
import { getQuestions, getMapNodeSubtree, getFinalNodeTitle } from '../firestore/firestore'
import { MapQuestions } from '../components/MapQuestions'
import { TitleBlock } from '../components/TitleBlock'

import '../styles/Map.scss'

export const Map = observer((props) => {
  const questions = getQuestions()
  const questionChildren = questions.map((question) => ({
    questionId: question._key,
    childNodes: getMapNodeSubtree(question._key),
  }))

  const [mapDepth, setMapDepth] = React.useState(0)

  return (
    <main className="map">
      <section className="top-container">
        <TitleBlock title="COVID CONVO" subtitle="Combining your conversations about Covid-19" />
      </section>
      <section className="bottom-container" style={{ transform: `translateX(${-40 * mapDepth}%)` }}>
        <div className="question-list-container">
          <MapQuestions questions={questions} questionChildren={questionChildren} setMapDepth={setMapDepth} />
        </div>
      </section>
    </main>
  )
})
