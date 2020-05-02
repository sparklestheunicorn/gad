import { css } from '@emotion/core'

export const styles = (theme) => ({
  rephraseContainer: {
    label: 'rephraseContainer',
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: `${theme.spacing.S} 0`,
    borderBottom: `1px solid ${theme.color.borderLight}`,
  },
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
    border: `1px solid ${theme.color.border}`,
    backgroundColor: selected ? theme.color.textLight : '#fff',
    margin: `0 2px`,
  }),
})
