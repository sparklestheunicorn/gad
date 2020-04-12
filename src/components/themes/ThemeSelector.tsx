import * as React from 'react'

//Theme components
import { GreatAmericanDebate } from './GreatAmericanDebate'
import { CovidConversation } from './CovidConversation'

//Welcome page components
import { GreatAmericanDebateWelcome } from '../../pages/themes/GreatAmericanDebateWelcome'
import { CovidConversationWelcome } from '../../pages/themes/CovidConversationWelcome'

export const ThemeSelector = (props) => {
  const { themeId } = props

  const selectTheme = () => {
    switch (themeId) {
      case 'great-american-debate': {
        return <GreatAmericanDebate />
      }
      case 'covid-conversation': {
        return <CovidConversation />
      }
    }
  }

  const theme = selectTheme()

  return theme
}

export const WelcomePage = (props) => {
  const { themeId } = props

  const selectWelcome = () => {
    switch (themeId) {
      case 'great-american-debate': {
        return <GreatAmericanDebateWelcome />
      }
      case 'covid-conversation': {
        return <CovidConversationWelcome />
      }
    }
  }

  const welcome = selectWelcome()

  return welcome
}
