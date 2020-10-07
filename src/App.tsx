/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { getQuestions } from './firestore/firestore'
import { observer } from 'mobx-react'

import { Map } from './pages/Map'

import { initDebateMapServerLink } from './firestore/init-dm-link'

import { generateTheme } from './styles/themes/themeGenerator'
import { styles } from './styles/App.styles'
import { resets } from './styles/resets'
import { ClinicalWelcome } from './pages/themes/ClinicalWelcome'
import { BlueSkiesWelcome } from './pages/themes/BlueSkiesWelcome'
import { RedHandedWelcome } from './pages/themes/RedHandedWelcome'

initDebateMapServerLink()

const App = observer((props) => {
  const themeId = process.env.REACT_APP_THEME_ID
  const theme = generateTheme(themeId)
  const s = styles(theme)

  const welcomePageMap = {
    clinical: ClinicalWelcome,
    'blue-skies': BlueSkiesWelcome,
    'red-handed': RedHandedWelcome,
  }

  const questions = getQuestions()

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
