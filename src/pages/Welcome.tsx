import * as React from 'react'
import { Link } from 'react-router-dom'

import { WelcomePage } from '../components/themes/ThemeSelector'

export const Welcome = (props) => {
  const themeId = process.env.REACT_APP_PROJECT_ID

  const welcomePage = <WelcomePage themeId={themeId} />

  return welcomePage
}
