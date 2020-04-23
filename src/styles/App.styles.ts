import { css } from '@emotion/core'

export const styles = (theme) =>
  css({
    label: 'app',
    position: 'relative',
    height: '100%',
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
