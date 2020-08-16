import merge from 'lodash/merge'
import { Theme } from './Theme.type'
import { defaultStyles } from './default'
import { clinicalStyles } from './clinical'
import { blueSkiesStyles } from './blueSkies'

export const generateTheme = (themeId: string): Theme => {
  const themeStyles = themeId === 'clinical' ? clinicalStyles : blueSkiesStyles
  return merge(defaultStyles, themeStyles)
}
