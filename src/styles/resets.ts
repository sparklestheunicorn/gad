import { css } from '@emotion/core'

export const resets = (theme) => ({
  html: css({
    boxSizing: 'border-box',
    height: '100%',
  }),
  '*, *:before, *:after': css({
    boxSizing: 'inherit',
  }),
  body: css({
    height: '100%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    color: theme.color.textDark,
  }),
  '#root': css({
    height: '100%',
  }),
  'a, a span': css({
    color: theme.color.textDark,
    textDecoration: 'none',
    fontFamily: theme.font.paragraph,
  }),
  button: css({
    background: '#fff',
    border: 'none',
    cursor: 'pointer',
    color: theme.color.textLight,
  }),
  img: css({
    maxWidth: '100%',
    maxHeight: '100%',
  }),
  'h1, h2, h3, h4, h5, h6': css({
    color: theme.color.textDark,
    margin: `${theme.spacing.S} 0`,
    fontWeight: 'bold',
    lineHeight: '1',
    span: {
      display: 'block',
    },
  }),
  h2: css({
    letterSpacing: 0,
  }),
  p: css({
    margin: `${theme.spacing.M} 0`,
  }),
  'input, textarea': css({
    color: theme.color.textDark,
    fontFamily: theme.font.paragraph,
  }),
})
