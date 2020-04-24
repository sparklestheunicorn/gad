import { css } from '@emotion/core'

export const styles = (theme) => ({
  convoCount: css({
    label: 'convoCount',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.XS,
    margin: '-1px 0 -1px -1px',
    fontFamily: theme.font.paragraph,
    color: theme.color.textLight,
    border: `2px solid ${theme.color.textLight}`,
    borderRadius: `0 ${theme.shape.borderRadius} 0 0 `,
    backgroundColor: '#fff',
  }),
  number: css({
    fontSize: theme.textSize.M,
    lineHeight: theme.textSize.M,
    margin: 0,
  }),
  convos: css({
    margin: `-${theme.spacing.S} 0 ${theme.spacing.XS} 0`,
    fontWeight: 'bold',
  }),
  canExpand: css({
    label: 'canExpand',
    color: theme.color.textLight,
    backgroundColor: '#fff',
  }),
  plus: {
    fontSize: theme.textSize.M,
    marginTop: '-5px',
  },
  expanded: css({
    label: 'expanded',
    color: '#fff',
    backgroundColor: theme.color.textLight,
  }),
  arrow: {
    fontSize: theme.textSize.XS,
  },
})
