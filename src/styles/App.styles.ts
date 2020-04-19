import facepaint from 'facepaint'

const breakpoints = [768, 1024]

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`))

export const styles = (theme) => {
  const defaultHeaderStyles = {
    fontFamily: theme.font.heading,
    color: theme.color.text,
  }
  return {
    h1: defaultHeaderStyles,
    h2: defaultHeaderStyles,
    h3: defaultHeaderStyles,
    h4: defaultHeaderStyles,
    h5: defaultHeaderStyles,
    h6: defaultHeaderStyles,
    '.subtitle': {
      fontFamily: theme.font.subheading,
      color: theme.color.text,
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
  }
}
