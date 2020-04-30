import { css } from '@emotion/core'

export const styles = (theme) => ({
  rephraseContainer: {
    label: 'rephraseContainer',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: `${theme.spacing.XS} 0`,
  },
  termName: css({
    fontWeight: 'bold',
  }),
  carouselArrow: {
    label: 'carouselArrow',
    color: theme.color.textLight,
    fontSize: theme.textSize.XS,
  },
  carouselDot: (selected) => ({
    label: 'carouselDot',
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    padding: '0',
    border: `1px solid ${theme.color.textLight}`,
    backgroundColor: selected ? theme.color.textLight : '#fff',
    margin: `0 2px`,
  }),
})
