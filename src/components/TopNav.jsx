import * as React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import '../styles/TopNav.scss'
import logo from '../assets/gad-logo-small-white.png'

export const TopNav = (props) => {
  let [showMenu, setShowMenu] = React.useState(true)

  const toggleMenu = (e) => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <React.Fragment>
      <nav className="top-nav">
        <Link to="/">
          <img src={logo} alt="The Great American Debate" />
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
      <aside className={classNames('main-menu', { hidden: showMenu })}>
        <div className="main-menu-header">
          <button className="main-menu-close" onClick={toggleMenu}>
            Close
          </button>
        </div>
      </aside>
    </React.Fragment>
  )
}
