import { css } from '@emotion/core'
import { mq, textSize } from '../styles/variables'

export const responsiveFlex = mq({
  label: 'responsiveFlex',
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  alignItems: ['center', null, null],
})

export const questionList = mq({
  label: 'questionList',
  position: 'relative',
  width: ['80%', '40%', '40%'],
})

export const mapIntroContainer = css(
  mq({
    label: 'mapIntroContainer',
    width: ['80%', '40%', '40%'],
    h2: {
      fontSize: textSize.L,
    },
    h3: {
      padding: 0,
    },
  }),
)
