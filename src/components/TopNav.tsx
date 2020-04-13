import * as React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import '../styles/TopNav.scss'

export const TopNav = (props) => {
  const { themeId } = props

  let [showMenu, setShowMenu] = React.useState(true)

  const toggleMenu = (e) => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  return (
    <header>
      <nav className="top-nav">
        <Link to="/">
          <img className="top-nav-logo" src={require(`../assets/images/${themeId}-logo.png`)} alt="PROJECT TITLE" />
        </Link>
        <button className="menu-button stylized-button stylized-button-small" onClick={toggleMenu}>
          Menu
        </button>
      </nav>
      <aside className={classNames('main-menu', { hidden: showMenu })}>
        <div className="main-menu-header">
          <button className="stylized-button main-menu-close" onClick={toggleMenu}>
            Close
          </button>
        </div>
      </aside>
    </header>
  )
}
