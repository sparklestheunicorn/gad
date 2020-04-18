import { css } from '@emotion/core'

export const mapQuestion = (theme) =>
  css({
    label: 'mapQuestion',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: theme.spacing.M,
    backgroundColor: '#fff',
    border: `1px solid ${theme.color.border}`,
    borderRadius: `0 ${theme.spacing.XS} ${theme.spacing.XS} 0`,
    cursor: 'pointer',
    div: {
      display: 'inline-block',
      verticalAlign: 'bottom',
    },
  })

export const convoCount = (theme) =>
  css({
    label: 'convoCount',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.XS,
    margin: '-1px 0 -1px -1px',

    'p:first-child': {
      fontSize: theme.textSize.M,
      lineHeight: theme.textSize.M,
      margin: 0,
      textAlign: 'center',
    },

    'p:nth-child(2)': {
      margin: 0,
    },
  })

export const title = (theme) =>
  css({
    label: 'mapQuestionTitle',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.textSize.M,
    margin: `0 0 0 ${theme.spacing.M}`,
    paddingRight: theme.spacing.M,
  })
