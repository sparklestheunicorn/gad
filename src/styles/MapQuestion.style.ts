import { css } from '@emotion/core'

export const mapQuestion = (theme) =>
  css({
    label: 'mapQuestion',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    marginBottom: theme.spacing.M,
    backgroundColor: '#fff',
    borderRadius: `${theme.spacing.XS}`,
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
    fontFamily: theme.font.paragraph,
    color: theme.color.textLight,
    border: `2px solid ${theme.color.border}`,
    borderRadius: '8px',

    'p:first-child': {
      fontSize: theme.textSize.M,
      lineHeight: theme.textSize.M,
      margin: 0,
      textAlign: 'center',
    },

    'p:nth-child(2)': {
      margin: `-${theme.spacing.S} 0 ${theme.spacing.XS} 0`,
      fontWeight: 'bold',
    },
  })

export const title = (theme) =>
  css({
    label: 'mapQuestionTitle',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: theme.textSize.S,
    fontFamily: theme.font.paragraph,
    margin: `0 0 0 ${theme.spacing.M}`,
    paddingRight: theme.spacing.M,
  })
