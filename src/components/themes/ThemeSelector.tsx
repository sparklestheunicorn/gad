import * as React from 'react'

//Welcome page components
import { GreatAmericanDebateWelcome } from '../../pages/themes/GreatAmericanDebateWelcome'
import { CovidConversationWelcome } from '../../pages/themes/CovidConversationWelcome'

//Theme-specific files
import '../../styles/themes/GreatAmericanDebate.scss'
import '../../styles/themes/CovidConversation.scss'

export const WelcomePage = (props) => {
  const { themeId } = props

  const selectWelcome = () => {
    switch (themeId) {
      case 'great-american-debate': {
        return <GreatAmericanDebateWelcome themeId={themeId} />
      }
      case 'covid-conversation': {
        return <CovidConversationWelcome themeId={themeId} />
      }
    }
  }

  const welcome = selectWelcome()

  return welcome
}
