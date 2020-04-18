import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

import { Welcome } from './pages/Welcome'
import { Map } from './pages/Map'

import './styles/App.scss'
import { generateTheme } from './styles/themes/themeGenerator'
import { initDebateMapServerLink } from './firestore/init-dm-link'

initDebateMapServerLink()

class App extends Component {

  render() {
    const themeId = process.env.REACT_APP_PROJECT_ID
    const theme = generateTheme(themeId)

    return (
      <ThemeProvider theme={theme}>
        <HashRouter basename="/">
          <div className="app">
            <Route path="/map" component={Map} />
            <Route exact path="/" component={Welcome} />
          </div>
        </HashRouter>
      </ThemeProvider>
    )
  }
}

export default App
