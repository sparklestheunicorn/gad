import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import { ThemeSelector } from './components/themes/ThemeSelector'
import { TopNav } from './components/TopNav'
import { Welcome } from './pages/Welcome'
import { Map } from './pages/Map'
import { Debates } from './pages/Debates'
import { Questions } from './pages/Questions'
import { Positions } from './pages/Positions'
import { Reasons } from './pages/Reasons'
import { Argument } from './pages/Argument'
import { Claim } from './pages/Claim'

import './styles/App.scss'
import { initDebateMapServerLink } from './firestore/init-dm-link'

initDebateMapServerLink()

class App extends Component {
  themeId = process.env.REACT_APP_PROJECT_ID

  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <TopNav themeId={this.themeId} />
          <Route path="/map" component={Map} />
          {/* The old app. We will allow people to switch back to this view at some point
          <Route path="/questions" component={Questions} />
          <Route path="/positions/:id" component={Positions} />
          <Route path="/reasons/:id" component={Reasons} />
          <Route path="/argument" component={Argument} />
          <Route path="/claim" component={Claim} />
          <Route path="/debates" component={Debates} />
           */}
          <Route exact path="/" component={Welcome} />
        </div>
      </HashRouter>
    )
  }
}

export default App
