/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { getQuestions, getNodeChildren } from './firestore/firestore'
import { observer } from 'mobx-react'

import { MapNode } from './types'
import { Map } from './pages/Map'

import { initDebateMapServerLink } from './firestore/init-dm-link'

import { generateTheme } from './styles/themes/themeGenerator'
import { styles } from './styles/App.styles'
import { resets } from './styles/resets'
import { CovidConversationWelcome } from './pages/themes/CovidConversationWelcome'
import { GreatAmericanDebateWelcome } from './pages/themes/GreatAmericanDebateWelcome'

initDebateMapServerLink()

const App = observer((props) => {
  const themeId = process.env.REACT_APP_PROJECT_ID
  const theme = generateTheme(themeId)
  const s = styles(theme)

  const welcomePageMap = {
    'covid-conversation': CovidConversationWelcome,
    'great-american-debate': GreatAmericanDebateWelcome,
    'corvid-conversation': GreatAmericanDebateWelcome,
  }

  const questions: [MapNode] = getQuestions() as [MapNode]

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <Global styles={resets(theme)} />
        <div id="appContainer" css={s.appContainer}>
          <Route path="/map" render={() => <Map questions={questions} />} />
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
