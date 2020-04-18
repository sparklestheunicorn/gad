import { css } from '@emotion/core'
import { mq, textSize } from '../styles/variables'

export const questionList = mq({
  label: 'questionList',
  position: 'relative',
  width: ['80%', '40%', '40%']
})

// was doubled
// needs css function for types to work
export const mapIntroContainer = css({
  label: 'mapIntroContainer',
  position: 'absolute',
  top: 0,
  right: '10%',
  width: '40%',
  'h2': {
    fontSize: textSize.L
  },
  'h3': {
    padding: 0
  }
})