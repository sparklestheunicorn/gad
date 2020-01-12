import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { TopNav } from './components/TopNav'
import { Welcome } from './pages/Welcome'
import { Debates } from './pages/Debates'
import { Questions } from './pages/Questions'
import { Positions } from './pages/Positions'
import { Reasons } from './pages/Reasons'
import { Argument } from './pages/Argument'
import { Claim } from './pages/Claim'

import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <TopNav />
          <Switch>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/positions">
              <Positions />
            </Route>
            <Route path="/reasons">
              <Reasons />
            </Route>
            <Route path="/argument">
              <Argument />
            </Route>
            <Route path="/claim">
              <Claim />
            </Route>
            <Route path="/debates">
              <Debates />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
