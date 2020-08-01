import { css } from '@emotion/core'

export const styles = (theme) => ({
  title: css({
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: theme.spacing.M,
    borderTop: `1px solid ${theme.color.borderLight}`,
    '&:first-of-type': { borderTop: 'none', marginTop: 0 },
  }),
  content: (open) =>
    css({
      maxHeight: open ? '90vh' : '0',
      transition: 'max-height 0.4s ease',
      overflowY: open ? 'hidden' : 'auto',
    }),
})
