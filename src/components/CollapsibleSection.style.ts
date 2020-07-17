import { css } from '@emotion/core'

export const styles = (theme) => ({
  title: css({
    textAlign: 'center',
    fontWeight: 'bold',
    borderTop: `1px solid ${theme.color.borderLight}`,
    paddingTop: theme.spacing.M,
  }),
  content: (open) =>
    css({
      maxHeight: open ? '90vh' : '0',
      transition: 'max-height 1s ease',
      overflowY: open ? 'hidden' : 'auto',
    }),
})
