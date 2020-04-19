/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from 'emotion-theming'
import { Theme } from '../styles/themes/Theme.type'
import { stylizedButton } from '../styles/shared.style'
import classNames from 'classnames'

import '../styles/TopNav.scss'

export const TopNav = (props) => {
  const theme: Theme = useTheme()

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
          <img className="top-nav-logo" src={require(`../assets/images/${theme.image.logo}`)} alt="PROJECT TITLE" />
        </Link>
        <button css={stylizedButton(theme)} onClick={toggleMenu}>
          Menu
        </button>
      </nav>
      <aside className={classNames('main-menu', { hidden: showMenu })}>
        <div className="main-menu-header">
          <button css={stylizedButton(theme)} onClick={toggleMenu}>
            Close
          </button>
          ]
        </div>
      </aside>
    </header>
  )
}
