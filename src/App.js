import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { TopNav } from './components/TopNav'
import { Welcome } from './pages/Welcome'
import { Home } from './pages/Home'
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
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/">
              <Home />
            </Route>
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
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
