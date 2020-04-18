import merge from 'lodash/merge'
import { Theme } from './Theme.type'
import { defaultStyles } from './default'
import { ccStyles } from './covidConversation'
import { gadStyles } from './greatAmericanDebate'

export const generateTheme = (themeId: string): Theme => {
  const themeStyles = themeId === 'covid-conversation' ? ccStyles : gadStyles
  return merge(defaultStyles, themeStyles)
}
