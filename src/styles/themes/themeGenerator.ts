import merge from 'lodash/merge'
import { Theme } from './Theme.type'
import { defaultStyles } from './default'
import { clinicalStyles } from './clinical'
import { blueSkiesStyles } from './blueSkies'
import { redHandedStyles } from './redHanded'

const selectTheme = (themeId: string) => {
  switch (themeId) {
    case 'clinical':
      return clinicalStyles
    case 'blue-skies':
      return blueSkiesStyles
    case 'red-handed':
      return redHandedStyles
  }
}

export const generateTheme = (themeId: string): Theme => {
  const themeStyles = selectTheme(themeId)
  return merge(defaultStyles, themeStyles)
}
