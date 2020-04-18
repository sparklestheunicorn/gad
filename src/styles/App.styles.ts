import facepaint from 'facepaint'

const breakpoints = [768, 1024]

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export const styles = (theme) => ({
  h1: {
    fontFamily: theme.font.heading,
  },
  h2: {
    fontFamily: theme.font.heading,
  },
  h3: {
    fontFamily: theme.font.heading,
  },
  h4: {
    fontFamily: theme.font.heading,
  },
  h5: {
    fontFamily: theme.font.heading,
  },
  h6: {
    fontFamily: theme.font.heading,
  },
  '.subtitle': {
    fontFamily: theme.font.subheading,
  },

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
