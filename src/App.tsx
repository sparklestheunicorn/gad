import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { TopNav } from './components/TopNav'
import { Welcome } from './pages/Welcome'
import { Debates } from './pages/Debates'
import { Questions } from './pages/Questions'
import { Positions } from './pages/Positions'
import { Reasons } from './pages/Reasons'
import { Argument } from './pages/Argument'
import { Claim } from './pages/Claim'

import './styles/App.scss'
import {initDebateMapServerLink} from './firestore/init-dm-link'

initDebateMapServerLink();

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <TopNav />
          <Route path="/questions" component={Questions} />
          <Route path="/positions/:id" component={Positions} />
          <Route path="/reasons/:id" component={Reasons} />
          <Route path="/argument" component={Argument} />
          <Route path="/claim" component={Claim} />
          <Route path="/debates" component={Debates} />
          <Route exact path="/" component={Welcome} />
        </div>
      </HashRouter>
    )
  }
}

export default App
