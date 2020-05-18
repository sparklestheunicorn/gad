import { css } from '@emotion/core'

export const styles = (theme) => ({
  rephraseContainer: theme.mq({
    label: 'rephraseContainer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['space-between', 'space-between', 'center'],
    margin: `0`,
  }),
  termContainer: css({
    label: 'termContainer',
    display: 'flex',
    flexDirection: 'row',
    div: {},
  }),
  termName: css({
    label: 'termName',
    fontWeight: 'bold',
    paddingRight: theme.spacing.M,
  }),
  termDefinition: css({
    label: 'termDefinition',
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
