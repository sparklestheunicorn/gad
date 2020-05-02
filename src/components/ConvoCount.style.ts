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
      borderLeft: `1px solid ${theme.color.border}`,
      borderRadius: `0 calc(${theme.shape.borderRadius} - 1px) ${
        hasDetails ? 0 : `calc(${theme.shape.borderRadius} - 1px)`
      } 0 `,
      backgroundColor: '#fff',
      alignSelf: 'stretch',
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
