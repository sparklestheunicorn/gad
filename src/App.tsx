import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import { TopNav } from './components/TopNav'
import { Welcome } from './pages/Welcome'
import { Map } from './pages/Map'

import './styles/App.scss'
import { initDebateMapServerLink } from './firestore/init-dm-link'

initDebateMapServerLink()

class App extends Component {
  themeId = process.env.REACT_APP_PROJECT_ID

  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          {/*<TopNav themeId={this.themeId} /> */}
          <Route path="/map" component={() => <Map themeId={this.themeId} />} />
          <Route exact path="/" component={Welcome} />
        </div>
      </HashRouter>
    )
  }
}

export default App
