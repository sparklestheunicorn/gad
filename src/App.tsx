/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { getQuestions, getMapNode, getChildrenMap } from './firestore/firestore'
import { observer } from 'mobx-react'

import { Welcome } from './pages/Welcome'
import { Map } from './pages/Map'

import { initDebateMapServerLink } from './firestore/init-dm-link'

import { generateTheme } from './styles/themes/themeGenerator'
import { styles } from './styles/App.styles'

initDebateMapServerLink()

const App = observer((props) => {
  const themeId = process.env.REACT_APP_PROJECT_ID
  const theme = generateTheme(themeId)
  const s = styles(theme)

  const questions = getQuestions()
  const questionChildren = questions.map((question) => ({
    questionId: question._key,
    childNodes: getChildrenMap(question._key),
  }))

  //console.log('APP questions', questions)
  //console.log('APP questionChildren', questionChildren)

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <div css={s.appContainer}>
          <Route path="/map" render={() => <Map questions={questions} questionChildren={questionChildren} />} />
          <Route exact path="/" component={Welcome} />
        </div>
      </HashRouter>
    </ThemeProvider>
  )
})

export default App
