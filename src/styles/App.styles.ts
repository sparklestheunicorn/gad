import facepaint from 'facepaint'

const breakpoints = [768, 1024]

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export const styles = (theme) => ({
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
})
