import { css } from '@emotion/core'

export const styles = (theme) => ({
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
})
