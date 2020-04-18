/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import * as React from 'react'
import { observer } from 'mobx-react'
import { getQuestions, getMapNodeSubtree } from '../firestore/firestore'
import { MapQuestions } from '../components/MapQuestions'
import { MapDepthSelector } from '../components/MapDepthSelector'

import { useTheme } from 'emotion-theming'
import { Theme } from '../styles/themes/Theme.type'
import { map, slideToDepth, mapFooter } from '../styles/Map.style'
import { covidConversation as cc } from '../styles/CovidConversation'

export const Map = observer((props) => {
  const theme: Theme = useTheme()
  const questions = getQuestions()
  const questionChildren = questions.map((question) => ({
    questionId: question._key,
    childNodes: getMapNodeSubtree(question._key),
  }))

  const [mapDepth, setMapDepth] = React.useState(0)
  const [maxMapDepth, setMaxMapDepth] = React.useState(0)

  return (
    <>
      <header css={cc.map.topContainer}>
        <img src={require(`../assets/images/${theme.image.titleTransparent}`)} alt="The Covid Conversation" />
      </header>
      <main css={css([map(theme), cc.map.responsiveHeight, cc.map.backgroundColor])}>
        <section css={slideToDepth(mapDepth)}>
          <div>
            <MapQuestions
              questions={questions}
              questionChildren={questionChildren}
              setMapDepth={setMapDepth}
              setMaxMapDepth={setMaxMapDepth}
            />
          </div>
        </section>
      </main>
      <footer css={mapFooter}>
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
      </footer>
    </>
  )
})
