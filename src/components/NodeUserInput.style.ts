import { css } from '@emotion/core'
import { NONAME } from 'dns'

export const styles = (theme) => ({
  inputSubmitRow: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  inputItem: {
    label: 'inputItem',
    border: `1px solid ${theme.color.border}`,
    padding: theme.spacing.S,
    fontSize: theme.textSize.XXS,
    borderRadius: theme.shape.borderRadius,
    width: '80%',
    minHeight: '50px',
    paddingRight: '30px',
    backgroundColor: theme.color.background,
    wordWrap: 'break-word',
    overflowY: 'hidden',
  },
  newInputItemContainer: {
    label: 'newInputItemContainer',
    display: 'flex',
    flexDirection: 'row',
    textarea: {
      display: 'inline-block',
      minHeight: '40px',
      width: '80%',
      margin: `0 0 ${theme.spacing.S} 10%`,
      padding: theme.spacing.S,
      paddingRight: '30px',
      overflow: 'hidden',
      resize: 'none',
      transition: 'height 0.2s ease',
      fontSize: theme.textSize.XXS,
      boxShadow: 'inset 0px 1px 5px 1px rgba(212,213,214,1)',
    },
  },
  newInputItemButton: {
    display: 'inline-block',
    width: 'fit-content',
    padding: theme.spacing.M,
  },
})
