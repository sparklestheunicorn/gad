import { css } from '@emotion/core'
import { textSize, spacing } from "./variables";

export const mapQuestion = css({
  label: 'mapQuestion',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  marginBottom: spacing.M,
  backgroundColor: '#fff',
  borderRadius: `0 ${spacing.XS} ${spacing.XS} 0`,
  cursor: 'pointer',
  div: {
    display: 'inline-block',
    verticalAlign: 'bottom'
  }
})

export const expanded = {
  label: 'expanded',
  '&.before': {
    content: '▻',
    position: 'absolute',
    right: 0,
    fontWeight: 'bold',
    fontSize: textSize.L,
    lineHeight: `calc(${textSize.L})`,
    transform: 'scaleX(0.5)'
  }
}

export const convoCount = css({
  label: 'convoCount',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: spacing.XS,
  margin: '-1px 0 -1px -1px',

  'p:first-child': {
    fontSize: textSize.M,
    lineHeight: textSize.M,
    margin: 0,
    textAlign: 'center'
  },

  'p:nth-child(2)': {
    margin: 0
  }
})

export const title = {
  label: 'mapQuestionTitle',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: textSize.M,
  margin: `0 0 0 ${spacing.M}`,
  paddingRight: spacing.M
}