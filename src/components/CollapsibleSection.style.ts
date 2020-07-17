import { css } from '@emotion/core'

export const styles = (theme) => ({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    borderTop: `1px solid ${theme.color.borderLight}`,
    paddingTop: theme.spacing.M,
  },
})
