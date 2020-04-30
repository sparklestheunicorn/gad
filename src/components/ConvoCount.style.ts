import { css } from '@emotion/core'

export const styles = (theme) => ({
  convoCount: (hasDetails) =>
    css({
      label: 'convoCount',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.XS,
      fontFamily: theme.font.paragraph,
      color: theme.color.textLight,
      border: `2px solid ${theme.color.textLight}`,
      borderRadius: `0 ${theme.shape.borderRadius} ${hasDetails ? 0 : theme.shape.borderRadius} 0 `,
      backgroundColor: '#fff',
    }),
  number: css({
    fontSize: theme.textSize.M,
    lineHeight: theme.textSize.M,
    margin: 0,
  }),
  convos: css({
    label: 'convos',
    margin: `-${theme.spacing.S} 0 ${theme.spacing.XS} 0`,
    fontWeight: 'bold',
  }),
  canExpand: css({
    label: 'canExpand',
    color: theme.color.textLight,
    backgroundColor: '#fff',
  }),
  expanded: css({
    label: 'expanded',
    color: '#fff',
    backgroundColor: theme.color.textLight,
  }),
  arrow: {
    fontSize: theme.textSize.S,
    margin: `0 ${theme.spacing.S}`,
  },
})
