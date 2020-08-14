/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { getQuestions, getNodeChildren } from './firestore/firestore'
import { observer } from 'mobx-react'

import { Map } from './pages/Map'

import { initDebateMapServerLink } from './firestore/init-dm-link'

import { generateTheme } from './styles/themes/themeGenerator'
import { styles } from './styles/App.styles'
import { resets } from './styles/resets'
import { ClinicalWelcome } from './pages/themes/ClinicalWelcome'
import { BlueSkiesWelcome } from './pages/themes/BlueSkiesWelcome'

initDebateMapServerLink()

const App = observer((props) => {
  const themeId = process.env.REACT_APP_THEME_ID
  const theme = generateTheme(themeId)
  const s = styles(theme)

  const welcomePageMap = {
    clinical: ClinicalWelcome,
    'blue-skies': BlueSkiesWelcome,
    'corvid-conversation': GreatAmericanDebateWelcome,
  }

  const questions = getQuestions()
  const questionChildren = questions.map((question) => ({
    questionId: question._key,
    childNodes: getNodeChildren(question._key),
  }))

  //console.log('APP questions', questions)
  //console.log('APP questionChildren', questionChildren)

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Global styles={resets(theme)} />
        <div id="appContainer" css={s.appContainer}>
          <Route path="/map" render={() => <Map questions={questions} questionChildren={questionChildren} />} />
          <Route
            exact
            path="/"
            render={() => {
              const Welcome = welcomePageMap[themeId]
              return <Welcome />
            }}
          />
        </div>
      </HashRouter>
    </ThemeProvider>
  )
})

export default App
