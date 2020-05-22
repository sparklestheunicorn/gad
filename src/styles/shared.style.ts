import { css } from '@emotion/core'

export const fontPreloader = (theme) =>
  css({
    position: 'absolute',
    transform: 'translate(300vw)',
    span: {
      fontFamily: theme.font.heading,
    },
    'span:nth-child(2)': {
      fontFamily: theme.font.subheading,
    },
  })

export const heading = (theme) => ({
  label: 'heading',
  fontFamily: theme.font.heading,
  color: theme.color.text,
})

export const page = (theme) =>
  css({
    label: 'page',
    paddingBottom: theme.spacing.M,
    position: 'relative',
    maxWidth: theme.layout.maxPageWidth,
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    minHeight: 0,
    flexDirection: 'column',
    overflow: 'hidden',
  })

export const subheading = (theme) => ({
  label: 'subheading',
  fontFamily: theme.font.subheading,
  color: theme.color.text,
  fontWeight: theme.font.subheadingWeight,
  textTransform: theme.font.subheadingTransform,
})

export const knockout = (theme) => ({
  backgroundColor: theme.color.knockoutBackground,
  color: '#fff',
})

export const selected = (theme) => ({
  backgroundColor: theme.color.selectedBackground,
})

export const dropShadow = (theme) => ({
  zIndex: 10,
  filter: `drop-shadow(1px 1px 2px ${theme.color.shadow})`,
})

export const stylizedButton = (theme) =>
  css({
    display: 'inline-block',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.color.text,
    letterSpacing: '2px',
    fontFamily: theme.font.paragraph,
    backgroundColor: theme.color.background,
    border: `1px solid ${theme.color.borderDark}`,
    padding: theme.spacing.M,
    cursor: 'pointer',
  })

export const stylizedButtonSlim = (theme) =>
  css({
    display: 'inline-block',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.color.text,
    letterSpacing: '2px',
    fontFamily: theme.font.paragraph,
    backgroundColor: theme.color.background,
    border: `1px solid ${theme.color.borderDark}`,
    padding: theme.spacing.S,
    cursor: 'pointer',
  })
