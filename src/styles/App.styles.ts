export const styles = (theme) => ({
  appContainer: {
    label: 'appContainer',
    position: 'relative',
    height: '100%',
    overflowY: 'auto',
    '.font-preloader': {
      position: 'absolute',
      transform: 'translate(300vw)',

      span: {
        fontFamily: theme.font.heading,
      },

      'span:nth-of-type(2)': {
        fontFamily: theme.font.subheading,
      },
      'span:nth-of-type(3)': {
        fontFamily: theme.font.paragraph,
      },
    },
  },
})
