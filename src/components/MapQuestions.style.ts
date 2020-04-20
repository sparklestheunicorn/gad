export const styles = (theme) => ({
  responsiveFlex: theme.mq({
    label: 'responsiveFlex',
    display: 'flex',
    flexDirection: ['column', 'row', 'row'],
    alignItems: ['center', null, null],
  }),
  questionList: theme.mq({
    label: 'questionList',
    position: 'relative',
    padding: '0px',
    width: ['80%', '40%', '40%'],
  }),
})
