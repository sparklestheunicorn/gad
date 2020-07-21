import { css } from '@emotion/core'

export const styles = (theme) => ({
  detailView: (detailViewOpen) =>
    css({
      label: 'detailView',
      width: '100%',
      maxHeight: detailViewOpen ? '90vh' : '0',
      padding: detailViewOpen ? `${theme.spacing.S} ${theme.spacing.M} ${theme.spacing.M} ${theme.spacing.M}` : 0,
      borderTop: detailViewOpen ? `1px solid ${theme.color.border}` : 'none',
      overflowY: detailViewOpen ? 'hidden' : 'auto',
      transition: 'max-height 1s ease',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: theme.font.paragraph,
      boxShadow: 'inset 0px 1px 5px 1px rgba(212,213,214,1)',
      p: {
        margin: `0px auto ${theme.spacing.S} auto`,
      },
    }),
  rephraseContainer: theme.mq({
    label: 'rephraseContainer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['space-between', 'space-between', 'center'],
    margin: `0`,
  }),
  carouselArrow: theme.mq({
    label: 'carouselArrow',
    color: theme.color.textLight,
    fontSize: [theme.textSize.L, theme.textSize.L, theme.textSize.XS],
    padding: 0,
  }),
  carouselDot: (selected) =>
    theme.mq({
      label: 'carouselDot',
      height: [theme.textSize.M, theme.textSize.M, '12px'],
      width: [theme.textSize.M, theme.textSize.M, '12px'],
      borderRadius: '50%',
      padding: '0',
      border: `1px solid ${theme.color.border}`,
      backgroundColor: selected ? theme.color.textLight : '#fff',
      margin: `0 2px`,
    }),
})
