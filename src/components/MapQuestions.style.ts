export const responsiveFlex = (theme) =>
  theme.mq({
    label: 'responsiveFlex',
    display: 'flex',
    flexDirection: ['column', 'row', 'row'],
    alignItems: ['center', null, null],
  })

export const questionList = (theme) =>
  theme.mq({
    label: 'questionList',
    position: 'relative',
    padding: '0px',
    width: ['80%', '40%', '40%'],
  })
