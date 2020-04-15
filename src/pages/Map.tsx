import * as React from 'react'
import { observer } from 'mobx-react'
import { getQuestions, getMapNodeSubtree, getFinalNodeTitle } from '../firestore/firestore'
import { MapQuestions } from '../components/MapQuestions'
import { TitleBlock } from '../components/TitleBlock'
import { MapDepthSelector } from '../components/MapDepthSelector'

import '../styles/Map.scss'

export const Map = observer((props) => {
  const questions = getQuestions()
  const questionChildren = questions.map((question) => ({
    questionId: question._key,
    childNodes: getMapNodeSubtree(question._key),
  }))

  const [mapDepth, setMapDepth] = React.useState(0)
  const [maxMapDepth, setMaxMapDepth] = React.useState(0)

  return (
    <main className="map">
      <section className="top-container">
        <TitleBlock title="COVID CONVO" subtitle="Combining your conversations about Covid-19" />
      </section>
      <section className="map-container" style={{ transform: `translateX(${-40 * mapDepth + 4}%)` }}>
        <div className="question-list-container">
          <MapQuestions
            questions={questions}
            questionChildren={questionChildren}
            setMapDepth={setMapDepth}
            setMaxMapDepth={setMaxMapDepth}
          />
        </div>
      </section>
      <section className="map-footer">
        <MapDepthSelector
          currentDepth={mapDepth}
          maxDepth={maxMapDepth}
          zeroMapDepth={() => setMapDepth(0)}
          decreaseMapDepth={() => {
            if (mapDepth > 0) {
              setMapDepth(mapDepth - 1)
            }
          }}
          increaseMapDepth={() => {
            if (mapDepth < maxMapDepth) {
              setMapDepth(mapDepth + 1)
            }
          }}
          maximizeMapDepth={() => setMapDepth(maxMapDepth)}
        />
      </section>
    </main>
  )
})
