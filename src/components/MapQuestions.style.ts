import { mq } from '../styles/App.styles'

export const responsiveFlex = mq({
  label: 'responsiveFlex',
  display: 'flex',
  flexDirection: ['column', 'row', 'row'],
  alignItems: ['center', null, null],
})

export const questionList = mq({
  label: 'questionList',
  position: 'relative',
  padding: '0px',
  width: ['80%', '40%', '40%'],
})
